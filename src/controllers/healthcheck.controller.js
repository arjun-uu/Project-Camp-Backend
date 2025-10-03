// import ApiResponse from "../utils/api-response.js";

// const healthCheck = (req, res) => {
//     try {
//         res
//             .status(200)
//             .json(new ApiResponse(200, { message: "server is running" }));
//     } catch (error) {
//         console.error(error);
//         res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
//     }
// };



// export { healthCheck };
import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "server is running" }));
});

export { healthCheck };


