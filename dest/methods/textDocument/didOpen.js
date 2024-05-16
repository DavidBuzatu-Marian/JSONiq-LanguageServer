import { documents } from "../../documents.js";
export const didOpen = (message) => {
    const params = message.params;
    documents.set(params.textDocument.uri, params.textDocument.text);
};
//# sourceMappingURL=didOpen.js.map