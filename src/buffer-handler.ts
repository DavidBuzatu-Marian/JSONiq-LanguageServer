import { RequestMessage } from "./types.js";
import { MethodHandler } from "./methods/method-handler.js";
import { LengthNotFoundInContentLengthHeaderError } from "./errors/length-error.js";
import log from "./log.js";

const SPACING_OFFSET: number = 4;

export class BufferHandler {
  private methodHandler: MethodHandler;
  private buffer: string;
  private contentLength: number;
  private messageStart: number;
  private messageLength: number;

  constructor() {
    this.methodHandler = new MethodHandler();
    this.buffer = "";
    this.contentLength = 0;
    this.messageStart = 0;
    this.messageLength = 0;
  }

  private addChunkToBuffer(chunk: Buffer) {
    this.buffer += chunk;
  }

  private processBufferContent() {
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
    } catch (err) {
      log.write(`Caught error while processing buffer content. Error: ${err}`);
    }
  }

  private getContentLength() {
    const lengthMatch = this.buffer.match(/Content-Length: (\d+)\r\n/);
    if (!lengthMatch) {
      throw new LengthNotFoundInContentLengthHeaderError(
        "Content length has no parsable length!"
      );
    }
    const messageLength = lengthMatch[1];
    const conversionBase = 10;
    return parseInt(messageLength, conversionBase);
  }

  private getMessageStart() {
    return this.buffer.indexOf("\r\n\r\n") + SPACING_OFFSET;
  }

  private isCompleteMessageInBuffer(messageLength: number) {
    return this.buffer.length >= messageLength;
  }

  private getJSONMessage() {
    const rawMessage = this.buffer.slice(this.messageStart, this.messageLength);
    return JSON.parse(rawMessage) as RequestMessage;
  }

  private removeMessageFromBuffer(messageLength: number) {
    this.buffer = this.buffer.slice(messageLength);
  }

  public processChunk(chunk: Buffer) {
    this.addChunkToBuffer(chunk);
    this.processBufferContent();
  }
}
