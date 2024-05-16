import log from "./log.js";
import { completion } from "./methods/autocomplete/completion.js";
import { diagnostic } from "./methods/diagnostics/diagnostic.js";
import { exit } from "./methods/exit.js";
import { initialize } from "./methods/initialize.js";
import {
  rangeSemanticTokens,
  semanticTokens,
} from "./methods/semanticHighlighting/semanticTokens.js";
import { shutdown } from "./methods/shutdown.js";
import { didChange } from "./methods/textDocument/didChange.js";
import { didOpen } from "./methods/textDocument/didOpen.js";

interface Message {
  jsonrpc: string;
}

export interface NotificationMessage extends Message {
  method: string;
  params?: unknown[] | object;
}

export interface RequestMessage extends NotificationMessage {
  id: number | string;
}

type RequestMethod = (
  message: RequestMessage
) =>
  | ReturnType<typeof initialize>
  | ReturnType<typeof semanticTokens>
  | ReturnType<typeof completion>
  | ReturnType<typeof diagnostic>;

type NotificationMethod = (message: NotificationMessage) => void;

const methodLookup: Record<string, RequestMethod | NotificationMethod> = {
  initialize,
  "textDocument/didChange": didChange,
  "textDocument/semanticTokens/full": semanticTokens,
  "textDocument/semanticTokens/range": rangeSemanticTokens,
  "textDocument/completion": completion,
  "textDocument/diagnostic": diagnostic,
  "textDocument/didOpen": didOpen,
  shutdown,
  exit,
};

const respond = (id: RequestMessage["id"], result: object | null) => {
  const message = JSON.stringify({ id, result });
  const messageLength = Buffer.byteLength(message, "utf-8");
  const header = `Content-Length: ${messageLength}\r\n\r\n`;

  log.write(header + message);
  process.stdout.write(header + message);
};

let buffer = "";
// This is just a chunk. It may be the beginning of a message, the end of it, or some other bit. We therefore need to buffer this data.
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  while (true) {
    // Check for the Content-Length header
    const lengthMatch = buffer.match(/Content-Length: (\d+)\r\n/);
    if (!lengthMatch) {
      break;
    }

    const contentLength = parseInt(lengthMatch[1], 10);
    const messageStart = buffer.indexOf("\r\n\r\n") + 4;

    // Continue unless full message is in the buffer
    if (buffer.length < messageStart + contentLength) {
      break;
    }
    const rawMessage = buffer.slice(messageStart, messageStart + contentLength);
    const jsonMessage = JSON.parse(rawMessage);

    log.write({
      id: jsonMessage.id,
      method: jsonMessage.method,
      params: jsonMessage.params,
    });

    // Handle the method
    const method = methodLookup[jsonMessage.method];
    if (method) {
      const result = method(jsonMessage);
      if (result !== undefined) {
        respond(jsonMessage.id, result);
      }
    }

    // Remove the processed message from buffer
    buffer = buffer.slice(messageStart + contentLength);
  }
});
