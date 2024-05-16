import { tokenLegend } from "./semanticHighlighting/tokenLegend.js";
export const initialize = (message) => {
    return {
        capabilities: {
            textDocumentSync: 1,
            semanticTokensProvider: {
                legend: tokenLegend,
                range: true,
                full: { delta: false },
            },
            diagnosticProvider: {
                interFileDependencies: false,
                workspaceDiagnostics: false,
            },
            completionProvider: {},
        },
        serverInfo: {
            name: "jsoniq-language-server",
            version: "0.0.1",
        },
    };
};
//# sourceMappingURL=initialize.js.map