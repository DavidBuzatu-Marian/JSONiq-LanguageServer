import { documents } from "../../documents.js";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { jsoniqLexer } from "../../grammar/jsoniqLexer.js";
import { jsoniqParser } from "../../grammar/jsoniqParser.js";
import { DiagnosticErrorListener } from "./errorListener.js";
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity.Error = 1;
    DiagnosticSeverity.Warning = 2;
    DiagnosticSeverity.Information = 3;
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
export const diagnostic = (message) => {
    const params = message.params;
    const content = documents.get(params.textDocument.uri);
    if (!content) {
        return null;
    }
    const items = [];
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
//# sourceMappingURL=diagnostic.js.map