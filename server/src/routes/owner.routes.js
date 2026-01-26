import express from "express";
import {
    Owner_GetAllUsers,
    Owner_GetAllCreator,
    Owner_GetAllQuizzes,
    Quiz_by_creator,
    getUserProfile,
    user_solvedQuiz,
    creator_CreatedQuizzes,
} from "../controller/Own.controller.js";


const Router = express.Router();

Router.get("/all-users", Owner_GetAllUsers);
Router.get("/all-creator", Owner_GetAllCreator);
Router.get("/all-quizzes", Owner_GetAllQuizzes);
Router.get("/creator-quiz", Quiz_by_creator);
Router.get("/user-solvedquiz/:id", user_solvedQuiz);
Router.get("/creator-createdquiz/:id", creator_CreatedQuizzes);


Router.post("/user-profile", getUserProfile);

export default Router; 