import { RequestMessage, connection } from "../../server.js";
import { Range } from "../../types.js";
import { TextDocumentIdentifier, documents } from "../../documents.js";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { jsoniqParser } from "../../grammar/jsoniqParser.js";
import { DiagnosticErrorListener } from "./errorListener.js";
import { DocumentUri } from "vscode-languageserver";

interface DocumentDiagnosticParams {
  textDocument: TextDocumentIdentifier;
}

namespace DiagnosticSeverity {
  export const Error: 1 = 1;
  export const Warning: 2 = 2;
  export const Information: 3 = 3;
  export const Hint: 4 = 4;
}

type DiagnosticSeverity = 1 | 2 | 3 | 4;

export interface Diagnostic {
  range: Range;
  severity: DiagnosticSeverity;
  code?: number | string;
  source: "JSONiq language server";
  message: string;
  data?: unknown;
}

interface FullDocumentDiagnosticReport {
  kind: "full";
  items: Diagnostic[];
}

const pendingDocumentDiagnostics = new Map<DocumentUri, NodeJS.Timeout>();

const DEFAULT_DELAY = 200; // 200ms delay before running diagnostics
export const documentsDiagnostics = new Map<
  DocumentUri,
  FullDocumentDiagnosticReport
>();

// @DEPRECATED
// Diagnostics are supported via push mechanism whenever clients support push diagnostics.
// export const diagnostic = (
//   message: RequestMessage
// ): FullDocumentDiagnosticReport | null => {
//   const params = message.params as DocumentDiagnosticParams;
//   const content = documents.get(params.textDocument.uri);
//   if (!content) {
//     return null;
//   }
//   const diagnostic = validateContent(content);
//   documentsDiagnostics.set(content, diagnostic);
//   return diagnostic;
// };

export const diagnoseDocument = (textDocumentUri: DocumentUri) => {
  const content = documents.get(textDocumentUri);
  if (!content) {
    return null;
  }
  clearPendingDiagnostic(textDocumentUri);
  pendingDocumentDiagnostics.set(
    textDocumentUri,
    setTimeout(() => {
      // Remove self after delay expires
      pendingDocumentDiagnostics.delete(textDocumentUri);
      const diagnostic = validateContent(content);
      documentsDiagnostics.set(content, diagnostic);
      connection.sendDiagnostics({
        uri: textDocumentUri,
        diagnostics: diagnostic.items,
      });
    }, DEFAULT_DELAY)
  );
};

export const validateContent = (
  content: string
): FullDocumentDiagnosticReport => {
  const items: Diagnostic[] = [];
  const inputStream = CharStreams.fromString(content);
  const lexer = new jsoniqLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new jsoniqParser(tokenStream);

  // Override error listener
  parser.removeErrorListeners();

  // Add our listener
  const diagnosticErrorListener = new DiagnosticErrorListener(items);
  parser.addErrorListener(diagnosticErrorListener);

  // Parse
  parser.moduleAndThisIsIt();

  return {
    kind: "full",
    items: diagnosticErrorListener.items,
  };
};
export const clearPendingDiagnostic = (textDocumentUri: string) => {
  const pendingDiagnostic = pendingDocumentDiagnostics.get(textDocumentUri);
  if (pendingDiagnostic) {
    clearTimeout(pendingDiagnostic);
    pendingDocumentDiagnostics.delete(textDocumentUri);
  }
};
