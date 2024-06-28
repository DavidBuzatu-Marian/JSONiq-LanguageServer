export class LengthNotFoundInContentLengthHeaderError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(
      this,
      LengthNotFoundInContentLengthHeaderError.prototype
    );
  }
}
