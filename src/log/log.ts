import * as fs from "fs";

const log = fs.createWriteStream("/tmp/jsoniq-lsp.log");

export default {
  write: (message: object | unknown) => {
    // Only write if verbosity enabled
    if (true) {
      if (typeof message === "object") {
        log.write(JSON.stringify(message));
      } else {
        log.write(message);
      }
      log.write("\n");
    }
  },
};
