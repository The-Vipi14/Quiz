import express from "express";
import {
  globalLeaderboard,
  quizLeaderboard,
  topCreators
} from "../controller/leaderboard.controller.js";

const router = express.Router();

/** 
 * Global leaderboard
 */
router.get("/global", globalLeaderboard);

/**
 * Quiz-wise leaderboard
 */
router.get("/quiz/:quizId", quizLeaderboard);

/**
 * Top creators
 */
router.get("/creators", topCreators);

export default router;
