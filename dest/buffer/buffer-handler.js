import { MethodHandler } from "../methods/method-handler.js";
import { LengthNotFoundInContentLengthHeaderError } from "../errors/length-error.js";
import log from "../log/log.js";
const SPACING_OFFSET = 4;
export class BufferHandler {
    constructor() {
        this.methodHandler = new MethodHandler();
        this.buffer = "";
        this.contentLength = 0;
        this.messageStart = 0;
        this.messageLength = 0;
    }
    addChunkToBuffer(chunk) {
        this.buffer += chunk;
    }
    processBufferContent() {
        try {
            while (true) {
                this.contentLength = this.getContentLength();
                this.messageStart = this.getMessageStart();
                this.messageLength = this.contentLength + this.messageStart;
                if (!this.isCompleteMessageInBuffer(this.messageLength)) {
                    break;
                }
                this.methodHandler.handleIncomingMethod(this.getJSONMessage());
                this.removeMessageFromBuffer(this.messageLength);
            }
        }
        catch (err) {
            log.write(`Caught error while processing buffer content. Error: ${err}`);
        }
    }
    getContentLength() {
        const lengthMatch = this.buffer.match(/Content-Length: (\d+)\r\n/);
        if (!lengthMatch) {
            throw new LengthNotFoundInContentLengthHeaderError("Content length has no parsable length!");
        }
        const messageLength = lengthMatch[1];
        const conversionBase = 10;
        return parseInt(messageLength, conversionBase);
    }
    getMessageStart() {
        return this.buffer.indexOf("\r\n\r\n") + SPACING_OFFSET;
    }
    isCompleteMessageInBuffer(messageLength) {
        return this.buffer.length >= messageLength;
    }
    getJSONMessage() {
        const rawMessage = this.buffer.slice(this.messageStart, this.messageLength);
        return JSON.parse(rawMessage);
    }
    removeMessageFromBuffer(messageLength) {
        this.buffer = this.buffer.slice(messageLength);
    }
    processChunk(chunk) {
        this.addChunkToBuffer(chunk);
        this.processBufferContent();
    }
}
//# sourceMappingURL=buffer-handler.js.map