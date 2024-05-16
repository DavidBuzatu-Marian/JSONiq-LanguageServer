import assert from "assert";
export const tokenTypes = {
    type: 0,
    namespace: 1,
    keyword: 2,
    variable: 3,
    parameter: 4,
    property: 5,
    function: 6,
    comment: 7,
    string: 8,
    number: 9,
    operator: 10,
    decorator: 11,
    label: 12,
    local_storage: 13,
    unknown: 14,
    punctuation: 15,
};
export const tokenModifiers = {
    declaration: 1 << 0,
    static: 1 << 1,
    definition: 1 << 2,
    modification: 1 << 3,
    functionScope: 1 << 4,
    block: 1 << 5,
    documentation: 1 << 6,
    readonly: 1 << 7,
    defaultLibrary: 1 << 8,
};
export const tokenLegend = {
    tokenTypes: Object.keys(tokenTypes),
    tokenModifiers: Object.keys(tokenModifiers),
};
export const encodeSemanticTokens = (tokens, offset) => {
    const result = [];
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
        let deltaDiff = previousPosition.line === tokenPosition.line
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
//# sourceMappingURL=tokenLegend.js.map