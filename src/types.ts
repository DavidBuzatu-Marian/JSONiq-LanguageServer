export interface Range {
  start: Position;
  end: Position;
}
export interface Position {
  line: number;
  character: number;
}

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
