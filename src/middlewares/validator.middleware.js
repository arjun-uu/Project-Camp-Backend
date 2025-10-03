// middlewares/validateRequest.js
import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Aggregate error messages and throw a custom API error
    return next(new ApiError(400, errors.array().map(err => err.msg).join(", ")));
  }
  next();
};
