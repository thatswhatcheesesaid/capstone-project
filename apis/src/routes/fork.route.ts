import {Router} from "express";
import {
    getForkByProfileIdAndRestaurantIdController,
    postForkScoreController,
    getAllForksController
} from "../controllers/fork.controller";


export const ForkRoute = Router()

ForkRoute.route("/")
    .post(postForkScoreController)
    .get(getAllForksController)

ForkRoute.route("/profileId/:profileId/restaurantId/:restaurantId")
    .get(getForkByProfileIdAndRestaurantIdController)