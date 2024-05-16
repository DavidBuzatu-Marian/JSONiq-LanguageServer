import { RequestMessage } from "../../server.js";
import { Range } from "../../types.js";
import log from "../../log.js";
import { TextDocumentIdentifier, documents } from "../../documents.js";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { jsoniqParser } from "../../grammar/jsoniqParser.js";
import { DiagnosticErrorListener } from "./errorListener.js";

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

export const diagnostic = (
  message: RequestMessage
): FullDocumentDiagnosticReport | null => {
  const params = message.params as DocumentDiagnosticParams;
  const content = documents.get(params.textDocument.uri);
  if (!content) {
    return null;
  }
  const items: Diagnostic[] = [];

  // Parse file
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
