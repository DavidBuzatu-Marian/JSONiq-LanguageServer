import { DocumentUri, documents } from "../../types/documents.js";
import { NotificationMessage } from "../../types/types.js";
import { diagnoseDocument } from "../diagnostics/diagnostic.js";

type TextDocumentItem = {
  uri: DocumentUri;
  languageId: string;
  version: number;
  text: string;
};

interface DidOpenTextDocumentParams {
  textDocument: TextDocumentItem;
}

export const didOpen = (message: NotificationMessage) => {
  const params = message.params as DidOpenTextDocumentParams;

  documents.set(params.textDocument.uri, params.textDocument.text);
  // Document changes must result in a document diagnose as new content arrived.
  diagnoseDocument(params.textDocument.uri);
};
