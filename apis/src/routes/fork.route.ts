import {Router} from "express";
import {
    getForkByProfileIdAndRestaurantIdController,
    postForkScoreController,
    getAllForksController
} from "../controllers/fork.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";


export const ForkRoute = Router()

ForkRoute.route("/")
    .post(isLoggedIn, postForkScoreController)
    .get(getAllForksController)

ForkRoute.route("/profileId/:profileId/restaurantId/:restaurantId")
    .get(getForkByProfileIdAndRestaurantIdController)