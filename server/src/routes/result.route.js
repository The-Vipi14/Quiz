import express from 'express'
const router = express.Router()

import { protect, creatorOnly } from "../middleware/auth.middleware.js";
import { getUserResults, getQuizSolvers } from "../controller/result.controller.js";

router.get("/me", protect, getUserResults);
router.get("/quiz/:quizId", protect, creatorOnly, getQuizSolvers);
export default router;