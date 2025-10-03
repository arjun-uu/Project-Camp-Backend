class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [], // corrected spelling
    stack = ""
  ) {
    super(message);               // Set the message on the base Error class
    this.statusCode = statusCode; // HTTP status code (e.g., 404)
    this.success = false;         // Indicates failure
    this.errors = errors;         // Array of detailed error messages

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
