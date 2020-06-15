import {Router} from "express";
import {
	deleteFoodpicController,
	postFoodpicController,
	getAllFoodpicsController,
	getFoodpicByFoodpicProfileIdController,
} from "../controllers/foodpic.controller";
import {deleteFoodpic} from "../../utils/foodpic/deleteFoodpic";
import {insertFoodpic} from "../../utils/foodpic/insertFoodpic";
import {selectAllFoodpics} from "../../utils/foodpic/selectAllFoodpics";
import {selectFoodpicByFoodpicProfileId} from "../../utils/foodpic/selectFoodpicByFoodpicProfileId";

export const FoodpicRoute = Router()

FoodpicRoute.route("/")
	.post(postFoodpicController)
	.get(getAllFoodpicsController)

FoodpicRoute.route("/:foodpicId")
	.delete(deleteFoodpicController)

FoodpicRoute.route("/:profileId")
	.get(getFoodpicByFoodpicProfileIdController)
