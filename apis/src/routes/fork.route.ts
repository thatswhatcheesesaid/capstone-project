import {Router} from "express";
import {
    getAllForksController,
    postForkScoreController
} from "../controllers/fork.controller";
import {insertForkScore} from "../../utils/fork/insertForkScore";
import {selectAllForks} from "../../utils/fork/selectAllForks";

export const ForkRoute = Router()

ForkRoute.route("/")
    .get(getAllForksController)
    .post(postForkScoreController)