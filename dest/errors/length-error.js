export class LengthNotFoundInContentLengthHeaderError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, LengthNotFoundInContentLengthHeaderError.prototype);
    }
}
//# sourceMappingURL=length-error.js.map