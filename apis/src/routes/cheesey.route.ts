import {Router} from "express";
import {
    getCheeseyByFoodpicIdAndProfileIdController,
    postCheeseyScoreController,
    getAllCheeseyController
} from "../controllers/cheesey.controller";


export const CheeseyRoute = Router()

CheeseyRoute.route("/")
    .post(postCheeseyScoreController)
    .get(getAllCheeseyController)

CheeseyRoute.route("/foodpicId/:foodpicId/profileId/:profileId")
    .get(getCheeseyByFoodpicIdAndProfileIdController)
