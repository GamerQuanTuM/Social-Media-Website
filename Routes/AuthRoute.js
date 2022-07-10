import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router();

//New User register route
router.post('/register', registerUser)

//User Login route
router.post('/login', loginUser)

export default router