import { TextDocumentIdentifier, documents } from "../../types/documents.js";
import { RequestMessage } from "../../types/types.js";
import { TokensParser } from "./tokenIdentification.js";
import { CharStreams } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { Position, Range } from "../../types/types.js";
import assert from "assert";
import { SemanticToken } from "./tokenLegend.js";

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

const getContentFromRange = (
  content: string,
  params: RangeSemanticTokensParams
) => {
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
  return contentForTokens;
};

export const rangeSemanticTokens = (
  message: RequestMessage
): SemanticTokens => {
  const params = message.params as RangeSemanticTokensParams;
  const startPosition = params.range.start;
  const content = documents.get(params.textDocument.uri);
  if (!content) {
    return {
      data: [],
    };
  }
  const contentForTokens = getContentFromRange(content, params);
  return getSemanticTokensFromContent(contentForTokens, startPosition);
};

const encodeSemanticTokens = (
  tokens: SemanticToken[],
  offset: Position
): number[] => {
  const result: number[] = [];
  const startLine = offset.line;
  let previousPosition = { line: 0, character: 0 };

  for (const token of tokens) {
    let tokenPosition = {
      line: token.startIdx.line + offset.line,
      character: token.startIdx.character,
    };
    // Add offset character to first line tokens.
    if (token.startIdx.line === startLine) {
      tokenPosition.character += offset.character;
    }
    let deltaLine = tokenPosition.line - previousPosition.line;
    // Delta index is relative to previous token in the same line.
    let deltaDiff =
      previousPosition.line === tokenPosition.line
        ? previousPosition.character
        : 0;
    let deltaIndex = tokenPosition.character - deltaDiff;

    assert(deltaLine >= 0, "Delta line must be positive");
    assert(deltaIndex >= 0, "Delta index must be positive");

    // Now previous becomes current token's start.
    previousPosition = tokenPosition;

    result.push(deltaLine);
    result.push(deltaIndex);
    result.push(token.tokenLength);
    result.push(token.tokenType.typeNumber);
    result.push(token.tokenModifiers.typeNumber);
  }
  return result;
};
