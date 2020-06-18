import {Router} from "express";
import {
    getCheeseyByFoodpicIdAndProfileIdController,
    postCheeseyScoreController
} from "../controllers/cheesey.controller";


export const CheeseyRoute = Router()

CheeseyRoute.route("/")
    .post(postCheeseyScoreController)

