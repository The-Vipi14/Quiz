import express from "express";
import {
  globalLeaderboard,
  quizLeaderboard,
  topCreators
} from "../controller/leaderboard.controller.js";

const router = express.Router();


router.get("/global", globalLeaderboard);

router.get("/quiz/:quizId", quizLeaderboard);

router.get("/creators", topCreators);

export default router;
