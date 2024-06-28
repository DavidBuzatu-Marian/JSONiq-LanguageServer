import { CharStreams, CommonTokenStream } from "antlr4ts";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";
import { jsoniqParser } from "../grammar/jsoniqParser.js";

export function initializeJSONiqParserWithoutErrorListener(content: string) {
  const parser = initializeJSONiqParser(content);
  // Override error listener
  parser.removeErrorListeners();
  return parser;
}

export function initializeJSONiqParser(content: string) {
  const inputStream = CharStreams.fromString(content);
  const lexer = new jsoniqLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new jsoniqParser(tokenStream);
}
