import {Router} from "express";
import {
	deleteFoodpicController,
	postFoodpicController,
	getAllFoodpicsController,
	getFoodpicByFoodpicProfileIdController, getTopFiveFoodpicsController,
} from "../controllers/foodpic.controller";
import {deleteFoodpic} from "../../utils/foodpic/deleteFoodpic";
import {insertFoodpic} from "../../utils/foodpic/insertFoodpic";
import {selectAllFoodpics} from "../../utils/foodpic/selectAllFoodpics";
import {selectFoodpicByFoodpicProfileId} from "../../utils/foodpic/selectFoodpicByFoodpicProfileId";
import {getHeapCodeStatistics} from "v8";

export const FoodpicRoute = Router()

FoodpicRoute.route("/")
	.post(postFoodpicController)
	.get(getAllFoodpicsController)

FoodpicRoute.route("/:foodpicId")
	.delete(deleteFoodpicController)

FoodpicRoute.route("/foodpic/:foodpicProfileId")
	.get(getFoodpicByFoodpicProfileIdController)

FoodpicRoute.route("/topFive")
	.get(getTopFiveFoodpicsController)
