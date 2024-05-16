"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnostic = void 0;
const fs = require("fs");
const documents_1 = require("../../documents");
const dictionaryWords = fs
    .readFileSync("/usr/share/dict/words")
    .toString()
    .split("\n");
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity.Error = 1;
    DiagnosticSeverity.Warning = 2;
    DiagnosticSeverity.Information = 3;
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
const diagnostic = (message) => {
    const params = message.params;
    const content = documents_1.documents.get(params.textDocument.uri);
    if (!content) {
        return null;
    }
    const wordsInDocument = content.split(/\W/);
    const invalidWords = new Set(wordsInDocument.filter((word) => !dictionaryWords.includes(word.toLowerCase())));
    const lines = content.split("\n");
    const items = [];
    invalidWords.forEach((invalidWord) => {
        lines.forEach((line, lineNumber) => {
            const regex = new RegExp(`\\b${invalidWord}\\b`, "g");
            let match;
            while ((match = regex.exec(line)) !== null) {
                items.push({
                    message: `Invalid word: ${invalidWord}`,
                    source: "LSP From Scratch",
                    severity: DiagnosticSeverity.Error,
                    range: {
                        start: { line: lineNumber, character: match.index },
                        end: {
                            line: lineNumber,
                            character: match.index + invalidWord.length,
                        },
                    },
                });
            }
        });
    });
    return {
        kind: "full",
        items,
    };
};
exports.diagnostic = diagnostic;
//# sourceMappingURL=diagnostic.js.map