import { TextDocumentIdentifier, documents } from "../../documents.js";
import { RequestMessage } from "../../server.js";
import { TokensParser } from "./tokenIdentification.js";
import { CharStreams } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { encodeSemanticTokens } from "./tokenLegend.js";
import { Position, Range } from "../../types.js";
import log from "../../log.js";

type ProgressToken = number | string;
interface WorkDoneProgressParams {
  workDoneToken?: ProgressToken;
}
interface PartialResultParams {
  partialResultToken?: ProgressToken;
}
interface SemanticTokensParams
  extends WorkDoneProgressParams,
    PartialResultParams {
  textDocument: TextDocumentIdentifier;
}

interface RangeSemanticTokensParams
  extends WorkDoneProgressParams,
    PartialResultParams {
  textDocument: TextDocumentIdentifier;
  range: Range;
}

interface SemanticTokens {
  resultId?: string;
  data: number[];
}

const getSemanticTokensFromContent = (
  content: string,
  offset: Position = { line: 0, character: 0 }
) => {
  let inputStream = CharStreams.fromString(content);
  let lexer = new jsoniqLexer(inputStream);
  const lexerTokens = lexer.getAllTokens();
  const tokenParser = new TokensParser(lexerTokens);
  const parsedTokens = tokenParser.getSemanticTokens();
  return {
    data: encodeSemanticTokens(parsedTokens, offset),
  };
};

export const semanticTokens = (message: RequestMessage): SemanticTokens => {
  const params = message.params as SemanticTokensParams;
  const content = documents.get(params.textDocument.uri);
  if (!content) {
    return {
      data: [],
    };
  }
  return getSemanticTokensFromContent(content);
};

export const rangeSemanticTokens = (
  message: RequestMessage
): SemanticTokens => {
  const params = message.params as RangeSemanticTokensParams;
  const content = documents.get(params.textDocument.uri);
  if (!content) {
    return {
      data: [],
    };
  }
  const contentLines = content.split(/\r?\n/);
  const startPosition = params.range.start;
  const endPosition = params.range.end;
  let contentForTokens =
    contentLines[startPosition.line].slice(startPosition.character) + "\n";
  let lineCnt = startPosition.line + 1;
  while (lineCnt < endPosition.line) {
    contentForTokens += contentLines[lineCnt] + "\n";
    ++lineCnt;
  }
  contentForTokens += contentLines[lineCnt].slice(0, endPosition.character);
  return getSemanticTokensFromContent(contentForTokens, startPosition);
};
