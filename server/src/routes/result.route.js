import express from 'express'
const router = express.Router()

import { protect } from "../middleware/auth.middleware.js";
import { getUserResults } from "../controller/result.controller.js";

router.get("/me", protect, getUserResults);

export default router;