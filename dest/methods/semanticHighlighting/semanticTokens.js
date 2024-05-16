import { documents } from "../../documents.js";
import { TokensParser } from "./tokenIdentification.js";
import { CharStreams } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { encodeSemanticTokens } from "./tokenLegend.js";
const getSemanticTokensFromContent = (content, offset = { line: 0, character: 0 }) => {
    let inputStream = CharStreams.fromString(content);
    let lexer = new jsoniqLexer(inputStream);
    const lexerTokens = lexer.getAllTokens();
    const tokenParser = new TokensParser(lexerTokens);
    const parsedTokens = tokenParser.getSemanticTokens();
    return {
        data: encodeSemanticTokens(parsedTokens, offset),
    };
};
export const semanticTokens = (message) => {
    const params = message.params;
    const content = documents.get(params.textDocument.uri);
    if (!content) {
        return {
            data: [],
        };
    }
    return getSemanticTokensFromContent(content);
};
export const rangeSemanticTokens = (message) => {
    const params = message.params;
    const content = documents.get(params.textDocument.uri);
    if (!content) {
        return {
            data: [],
        };
    }
    const contentLines = content.split(/\r?\n/);
    const startPosition = params.range.start;
    const endPosition = params.range.end;
    let contentForTokens = contentLines[startPosition.line].slice(startPosition.character) + "\n";
    let lineCnt = startPosition.line + 1;
    while (lineCnt < endPosition.line) {
        contentForTokens += contentLines[lineCnt] + "\n";
        ++lineCnt;
    }
    contentForTokens += contentLines[lineCnt].slice(0, endPosition.character);
    return getSemanticTokensFromContent(contentForTokens, startPosition);
};
//# sourceMappingURL=semanticTokens.js.map