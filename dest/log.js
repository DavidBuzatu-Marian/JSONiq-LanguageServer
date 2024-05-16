import * as fs from "fs";
const log = fs.createWriteStream("/tmp/lsp1.log");
export default {
    write: (message) => {
        if (typeof message === "object") {
            log.write(JSON.stringify(message));
        }
        else {
            log.write(message);
        }
        log.write("\n");
    },
};
//# sourceMappingURL=log.js.map