import { Connection, createConnection } from "vscode-languageserver/node.js";
import { BufferHandler } from "./buffer/buffer-handler.js";

export const connection: Connection = createConnection();

const bufferHandler = new BufferHandler();
// This is just a chunk. It may be the beginning of a message, the end of it, or some other bit. We therefore need to buffer this data.
process.stdin.on("data", (chunk) => {
  bufferHandler.processChunk(chunk);
});
