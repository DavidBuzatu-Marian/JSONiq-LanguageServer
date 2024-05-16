"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completion = void 0;
const fs = require("fs");
const documents_1 = require("../../documents");
const MAX_LENGTH = 100;
const words = fs.readFileSync("/usr/share/dict/words").toString().split("\n");
const completion = (message) => {
    const params = message.params;
    const content = documents_1.documents.get(params.textDocument.uri);
    if (!content) {
        return null;
    }
    const currentLine = content?.split("\n")[params.position.line];
    const lineUntilCursor = currentLine.slice(0, params.position.character);
    const currentPrefix = lineUntilCursor.replace(/.*\W(.*?)/, "$1");
    const items = words
        .filter((word) => {
        return word.startsWith(currentPrefix);
    })
        .slice(0, MAX_LENGTH)
        .map((word) => {
        return { label: word };
    });
    return {
        isIncomplete: items.length === MAX_LENGTH,
        items,
    };
};
exports.completion = completion;
//# sourceMappingURL=completion.js.map