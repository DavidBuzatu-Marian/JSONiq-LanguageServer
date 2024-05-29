import { RequestMessage } from "../server.js";
import { tokenLegend } from "./semanticHighlighting/tokenLegend.js";
type ServerCapabilities = Record<string, unknown>;

interface InitializeResult {
  capabilities: ServerCapabilities;
  serverInfo?: {
    name: string;
    version?: string;
  };
}

export const initialize = (message: RequestMessage): InitializeResult => {
  return {
    capabilities: {
      textDocumentSync: 1,
      semanticTokensProvider: {
        legend: tokenLegend,
        range: true,
        full: { delta: false },
      },
      completionProvider: {},
    },
    serverInfo: {
      name: "jsoniq-language-server",
      version: "0.0.1",
    },
  };
};
