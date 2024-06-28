import log from "../log/log.js";
import { completion } from "./autocomplete/completion.js";
import { semanticTokens, rangeSemanticTokens, } from "./semanticHighlighting/semanticTokens.js";
import { exit } from "./serverMethods/exit.js";
import { initialize } from "./serverMethods/initialize.js";
import { shutdown } from "./serverMethods/shutdown.js";
import { didChange } from "./textDocument/didChange.js";
import { didOpen } from "./textDocument/didOpen.js";
export const INVALID_REQUEST = -32600;
export class MethodHandler {
    constructor() {
        this.isShutDownInitialized = false;
        this.methodLookup = {
            initialize,
            "textDocument/didChange": didChange,
            "textDocument/semanticTokens/full": semanticTokens,
            "textDocument/semanticTokens/range": rangeSemanticTokens,
            "textDocument/completion": completion,
            "textDocument/didOpen": didOpen,
            shutdown,
            exit,
        };
    }
    logRequest(jsonMessage) {
        log.write({
            id: jsonMessage.id,
            method: jsonMessage.method,
            params: jsonMessage.params,
        });
    }
    getMethodResultAndRespond(jsonMessage) {
        const result = this.getMethodResult(jsonMessage);
        if (result !== undefined) {
            this.respond(jsonMessage.id, result);
        }
    }
    setShutDownInvoked(jsonMessage) {
        if (jsonMessage.method === "shutdown") {
            this.isShutDownInitialized = true;
        }
    }
    getMethodResult(jsonMessage) {
        if (this.isShutDownInitialized && jsonMessage.method !== "exit") {
            // We received a method call other than exit after shutdown.
            // This must return an error.
            return {
                error: {
                    code: INVALID_REQUEST,
                    message: `Attempting to call method: ${jsonMessage.method} after shutdown! This is an illegal operation. Exit-only is allowed`,
                },
            };
        }
        else if (this.invokedMethod) {
            return this.invokedMethod(jsonMessage);
        }
        else {
            return undefined;
        }
    }
    respond(id, result) {
        const message = JSON.stringify({ id, result });
        const messageLength = Buffer.byteLength(message, "utf-8");
        const header = `Content-Length: ${messageLength}\r\n\r\n`;
        log.write(header + message);
        process.stdout.write(header + message);
    }
    handleIncomingMethod(jsonMessage) {
        this.logRequest(jsonMessage);
        this.invokedMethod = this.methodLookup[jsonMessage.method];
        this.getMethodResultAndRespond(jsonMessage);
        this.setShutDownInvoked(jsonMessage);
    }
}
//# sourceMappingURL=method-handler.js.map