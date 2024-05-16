"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLexer = exports.LexerData = void 0;
const antlr4ts_1 = require("antlr4ts");
const jsoniqLexer_1 = require("../../grammar/jsoniqLexer");
const log_1 = require("../../log");
class LexerData {
    constructor(lexer) {
        this._tokens = undefined;
        this._lexer = lexer;
    }
    get lexer() {
        return this._lexer;
    }
    get lexerTokens() {
        if (!this._tokens) {
            this._tokens = this._lexer.getAllTokens();
            log_1.default.write(`token fetch: ${this._tokens}`);
            this._lexer.reset();
        }
        log_1.default.write(`token fetch: ${this._tokens}`);
        return this._tokens;
    }
}
exports.LexerData = LexerData;
function getLexer(content) {
    const inputStream = antlr4ts_1.CharStreams.fromString(content);
    return new LexerData(new jsoniqLexer_1.jsoniqLexer(inputStream));
}
exports.getLexer = getLexer;
//# sourceMappingURL=lexerizer.js.map