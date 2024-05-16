"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLexer = void 0;
const antlr4ts_1 = require("antlr4ts");
const jsoniqLexer_1 = require("../../grammar/jsoniqLexer");
function getLexer(content) {
    const inputStream = antlr4ts_1.CharStreams.fromString(content);
    return new jsoniqLexer_1.jsoniqLexer(inputStream);
}
exports.getLexer = getLexer;
//# sourceMappingURL=tokenizer.js.map