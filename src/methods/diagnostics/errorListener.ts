import {
  ParserErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from "antlr4ts";
import { Diagnostic } from "./diagnostic.js";

export class DiagnosticErrorListener implements ParserErrorListener {
  private _items: Diagnostic[];
  constructor(items: Diagnostic[]) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    let tokenLength = 0;
    if (offendingSymbol) {
      tokenLength = offendingSymbol.text?.length ?? 0;
    }
    const diagnostic: Diagnostic = {
      severity: 1,
      message: msg,
      range: {
        start: { line: line - 1, character: charPositionInLine },
        end: { line: line - 1, character: charPositionInLine + tokenLength },
      },
      source: "JSONiq language server",
    };
    this._items.push(diagnostic);
  }
}
