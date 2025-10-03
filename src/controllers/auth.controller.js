import { User } from "../models/user.model.js";
import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-error.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateAccessAndRefreshTokens } from "../utils/token.js"; // import your token utility

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  // Find user
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Check password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid credentials");
  }

  // Generate Access & Refresh Tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user);

  // Sanitize user object
  const sanitizedUser = await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
  );

  // Set refresh token as HttpOnly cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // Send response
  return res.status(200).json(
    new ApiResponse(
      200,
      { user: sanitizedUser, accessToken },
      "Logged in successfully"
    )
  );
});

export { login };
  