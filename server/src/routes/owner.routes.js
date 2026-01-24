import express from "express";

import Quiz from "../models/Quiz.js";

import {
    Owner_GetAllUsers,
    Owner_GetAllCreator,
    Owner_GetAllQuizzes,
    Quiz_by_creator
} from "../controller/Own.controller.js";

const Router = express.Router();

Router.get("/all-users", Owner_GetAllUsers);
Router.get("/all-creator", Owner_GetAllCreator);
Router.get("/all-quizzes", Owner_GetAllQuizzes);
Router.get("/creator-quiz",Quiz_by_creator);

export default Router;