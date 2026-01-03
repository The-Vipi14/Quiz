import express from "express";
import {
  getQuizzesByTech,
  getQuizById,
  createQuiz,
} from "../controller/quiz.controller.js";

import { protect, creatorOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * GET quizzes by technology
 * Example: /api/quizzes?tech=React
 */
router.get("/", getQuizzesByTech);

/**
 * GET single quiz by ID
 * Example: /api/quizzes/65ab...
 */
router.get("/:id", getQuizById);

/**
 * CREATE quiz (CREATOR ONLY)
 * Example: POST /api/quizzes
 */
router.post("/", protect, creatorOnly, createQuiz);

export default router;
