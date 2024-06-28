import log from "../log/log.js";
import { NotificationMessage, RequestMessage } from "../types/types.js";
import { completion } from "./autocomplete/completion.js";
import {
  semanticTokens,
  rangeSemanticTokens,
} from "./semanticHighlighting/semanticTokens.js";
import { exit } from "./serverMethods/exit.js";
import { initialize } from "./serverMethods/initialize.js";
import { shutdown } from "./serverMethods/shutdown.js";
import { didChange } from "./textDocument/didChange.js";
import { didOpen } from "./textDocument/didOpen.js";

export const INVALID_REQUEST: number = -32600;

type RequestMethod = (
  message: RequestMessage
) =>
  | ReturnType<typeof initialize>
  | ReturnType<typeof semanticTokens>
  | ReturnType<typeof completion>;

type NotificationMethod = (message: NotificationMessage) => void;
export class MethodHandler {
  private isShutDownInitialized = false;
  private methodLookup: Record<string, RequestMethod | NotificationMethod> = {
    initialize,
    "textDocument/didChange": didChange,
    "textDocument/semanticTokens/full": semanticTokens,
    "textDocument/semanticTokens/range": rangeSemanticTokens,
    "textDocument/completion": completion,
    "textDocument/didOpen": didOpen,
    shutdown,
    exit,
  };

  private logRequest(jsonMessage: RequestMessage) {
    log.write({
      id: jsonMessage.id,
      method: jsonMessage.method,
      params: jsonMessage.params,
    });
  }

  public handleIncomingMethod(jsonMessage: RequestMessage) {
    this.logRequest(jsonMessage);
    const method = this.methodLookup[jsonMessage.method];
    if (method) {
      this.handleMethodWithExit(method, jsonMessage);
    }
  }

  private handleMethodWithExit(
    method: RequestMethod | NotificationMethod,
    jsonMessage: RequestMessage
  ) {
    if (this.isShutDownInitialized && jsonMessage.method !== "exit") {
      // We received a method call other than exit after shutdown.
      // This must return an error.
      const errResult = {
        error: {
          code: INVALID_REQUEST,
          message: `Attempting to call method: ${jsonMessage.method} after shutdown! This is an illegal operation. Exit-only is expected`,
        },
      };
      this.respond(jsonMessage.id, errResult);
    } else {
      const result = method(jsonMessage);
      if (result !== undefined) {
        this.respond(jsonMessage.id, result);
      }
    }
    if (jsonMessage.method === "shutdown") {
      this.isShutDownInitialized = true;
    }
  }

  private respond(id: RequestMessage["id"], result: object | null) {
    const message = JSON.stringify({ id, result });
    const messageLength = Buffer.byteLength(message, "utf-8");
    const header = `Content-Length: ${messageLength}\r\n\r\n`;

    log.write(header + message);
    process.stdout.write(header + message);
  }
}
