import { TextDocumentIdentifier } from "../../types/documents.js";
import { NotificationMessage } from "../../types/types.js";
import {
  clearPendingDiagnostic,
  documentsDiagnostics,
} from "../diagnostics/diagnostic.js";

interface DidCloseTextDocumentParams {
  textDocument: TextDocumentIdentifier;
}

export const didClose = (message: NotificationMessage): void => {
  const params = message.params as DidCloseTextDocumentParams;
  // Remove diagnostics on close
  documentsDiagnostics.delete(params.textDocument.uri);
  clearPendingDiagnostic(params.textDocument.uri);
};
