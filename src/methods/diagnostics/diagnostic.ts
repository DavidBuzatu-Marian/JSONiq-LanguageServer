import { connection } from "../../server.js";
import { Range } from "../../types/types.js";
import { TextDocumentIdentifier, documents } from "../../types/documents.js";
import { DiagnosticErrorListener } from "./errorListener.js";
import { DocumentUri } from "vscode-languageserver";
import { initializeJSONiqParserWithoutErrorListener } from "../../parser-utils/parser.js";
import { jsoniqParser } from "../../grammar/jsoniqParser.js";

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

const setPendingDiagnostic = (textDocumentUri: string, content: string) => {
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

export const diagnoseDocument = (textDocumentUri: DocumentUri) => {
  const content = documents.get(textDocumentUri);
  if (!content) {
    return null;
  }
  clearPendingDiagnostic(textDocumentUri);
  setPendingDiagnostic(textDocumentUri, content);
};

const addDiagnosticErrorListener = (parser: jsoniqParser) => {
  const items: Diagnostic[] = [];
  const diagnosticErrorListener = new DiagnosticErrorListener(items);
  parser.addErrorListener(diagnosticErrorListener);
  return diagnosticErrorListener;
};

const parseContent = (parser: jsoniqParser) => {
  parser.moduleAndThisIsIt();
};

export const validateContent = (
  content: string
): FullDocumentDiagnosticReport => {
  const parser = initializeJSONiqParserWithoutErrorListener(content);
  const diagnosticErrorListener = addDiagnosticErrorListener(parser);
  parseContent(parser);

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
