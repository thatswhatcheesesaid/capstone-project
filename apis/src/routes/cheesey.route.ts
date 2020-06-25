import {Router} from "express";
import {
    getCheeseyByFoodpicIdAndProfileIdController,
    postCheeseyScoreController,
    getAllCheeseyController
} from "../controllers/cheesey.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";


export const CheeseyRoute = Router()

CheeseyRoute.route("/")
    .post(isLoggedIn, postCheeseyScoreController)
    .get(getAllCheeseyController)

CheeseyRoute.route("/foodpicId/:foodpicId/profileId/:profileId")
    .get(getCheeseyByFoodpicIdAndProfileIdController)
