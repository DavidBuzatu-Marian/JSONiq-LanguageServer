import { documents, } from "../../documents.js";
export const didChange = (message) => {
    const params = message.params;
    documents.set(params.textDocument.uri, params.contentChanges[0].text);
};
//# sourceMappingURL=didChange.js.map