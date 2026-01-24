import express from "express";

import Quiz from "../models/Quiz.js";
import { Owner_GetAllUsers, Owner_GetAllCreator, Owner_GetAllQuizzes } from "../controller/Own.controller.js";

const Router = express.Router();

Router.get("/all-users", Owner_GetAllUsers);
Router.get("/all-creator", Owner_GetAllCreator);
Router.get("/all-quizzes", Owner_GetAllQuizzes);

Router.get("/creator-quiz", async (req, res) => {
    try {
        const userId = req.body.userId;
        // const data = await Quiz.find({ createdBy:userId})
        const data = await Quiz.find({ createdBy: "695932b3aef3f3825c43ce93" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
});

export default Router;

