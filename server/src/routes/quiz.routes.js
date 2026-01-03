import express from "express";
import {
  getQuizzesByTech,
  getQuizById,
  createQuiz,
  submitQuiz,
} from "../controller/quiz.controller.js";

import { protect, creatorOnly } from "../middleware/auth.middleware.js";
 
const router = express.Router();

router.get("/", getQuizzesByTech);
router.get("/:id", getQuizById);

// creator quiz create
router.post("/", protect, creatorOnly, createQuiz);

// quiz submit (any logged-in user)
router.post("/submit", protect, submitQuiz);

export default router;
