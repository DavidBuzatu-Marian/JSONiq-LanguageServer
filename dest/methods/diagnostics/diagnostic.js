import { connection } from "../../server.js";
import { documents } from "../../types/documents.js";
import { DiagnosticErrorListener } from "./errorListener.js";
import { initializeJSONiqParserWithoutErrorListener } from "../../parser-utils/parser.js";
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity.Error = 1;
    DiagnosticSeverity.Warning = 2;
    DiagnosticSeverity.Information = 3;
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
const pendingDocumentDiagnostics = new Map();
const DEFAULT_DELAY = 200; // 200ms delay before running diagnostics
export const documentsDiagnostics = new Map();
// @DEPRECATED
// Diagnostics are supported via push mechanism whenever clients support push diagnostics.
// export const diagnostic = (
//   message: RequestMessage
// ): FullDocumentDiagnosticReport | null => {
//   const params = message.params as DocumentDiagnosticParams;
//   const content = documents.get(params.textDocument.uri);
//   if (!content) {
//     return null;
//   }
//   const diagnostic = validateContent(content);
//   documentsDiagnostics.set(content, diagnostic);
//   return diagnostic;
// };
const setPendingDiagnostic = (textDocumentUri, content) => {
    pendingDocumentDiagnostics.set(textDocumentUri, setTimeout(() => {
        // Remove self after delay expires
        pendingDocumentDiagnostics.delete(textDocumentUri);
        const diagnostic = validateContent(content);
        documentsDiagnostics.set(content, diagnostic);
        connection.sendDiagnostics({
            uri: textDocumentUri,
            diagnostics: diagnostic.items,
        });
    }, DEFAULT_DELAY));
};
export const diagnoseDocument = (textDocumentUri) => {
    const content = documents.get(textDocumentUri);
    if (!content) {
        return null;
    }
    clearPendingDiagnostic(textDocumentUri);
    setPendingDiagnostic(textDocumentUri, content);
};
const addDiagnosticErrorListener = (parser) => {
    const items = [];
    const diagnosticErrorListener = new DiagnosticErrorListener(items);
    parser.addErrorListener(diagnosticErrorListener);
    return diagnosticErrorListener;
};
const parseContent = (parser) => {
    parser.moduleAndThisIsIt();
};
export const validateContent = (content) => {
    const parser = initializeJSONiqParserWithoutErrorListener(content);
    const diagnosticErrorListener = addDiagnosticErrorListener(parser);
    parseContent(parser);
    return {
        kind: "full",
        items: diagnosticErrorListener.items,
    };
};
export const clearPendingDiagnostic = (textDocumentUri) => {
    const pendingDiagnostic = pendingDocumentDiagnostics.get(textDocumentUri);
    if (pendingDiagnostic) {
        clearTimeout(pendingDiagnostic);
        pendingDocumentDiagnostics.delete(textDocumentUri);
    }
};
//# sourceMappingURL=diagnostic.js.map