// routes/auth.routes.js
import { Router } from "express";  
import { registerUser } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validators/index.js";

const router = Router();

// POST /api/auth/register
router.post("/register", userRegisterValidator(), validate, registerUser);

export default router;
