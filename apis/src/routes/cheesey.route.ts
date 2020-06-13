import {Router} from "express";
import {
    getAllCheeseyController,
    postCheeseyScoreController
} from "../controllers/cheesey.controller";
import {insertCheeseyScore} from "../../utils/cheesey/insertCheeseyScore";
import {selectAllCheesey} from "../../utils/cheesey/selectAllCheesey";

export const CheeseyRoute = Router()

CheeseyRoute.route("/")
    .get(getAllCheeseyController)
    .post(postCheeseyScoreController)