"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class TokensVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() { }
    /**
     * Visit a parse tree produced by `jsoniqParser.setter`.
     * @param ctx the parse tree
     * @return the visitor void
     */
    visitSetter(ctx) { }
}
//# sourceMappingURL=tokenVisitors.js.map