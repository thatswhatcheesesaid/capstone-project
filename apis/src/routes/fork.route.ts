import {Router} from "express";
import {
    getForkByProfileIdAndRestaurantIdController,
    postForkScoreController
} from "../controllers/fork.controller";


export const ForkRoute = Router()

ForkRoute.route("/")
    .post(postForkScoreController)

ForkRoute.route("/profileId/:profileId/restaurantId/:restaurantId")