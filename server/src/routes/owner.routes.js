import express from "express";


import {  Owner_GetAllUsers , Owner_GetAllCreator} from "../controller/Own.controller.js";


const Router = express.Router();

Router.get("/all-users",Owner_GetAllUsers);
Router.get("/all-creator",Owner_GetAllCreator);

export default Router;

