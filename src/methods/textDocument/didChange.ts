import { NotificationMessage } from "../../server.js";
import {
  documents,
  VersionedTextDocumentIdentifier,
  TextDocumentContentChangeEvent,
} from "../../types/documents.js";
import { diagnoseDocument } from "../diagnostics/diagnostic.js";

interface DidChangeTextDocumentParams {
  textDocument: VersionedTextDocumentIdentifier;
  contentChanges: TextDocumentContentChangeEvent[];
}

export const didChange = (message: NotificationMessage): void => {
  const params = message.params as DidChangeTextDocumentParams;

  documents.set(params.textDocument.uri, params.contentChanges[0].text);
  // Document changes must result in a document diagnose as new content arrived.
  diagnoseDocument(params.textDocument.uri);
};
