import {Router} from "express";
import {
	deleteFoodpicController,
	postFoodpicController,
	getAllFoodpicsController,
	getFoodpicByFoodpicProfileIdController,
} from "../controllers/foodpic.controller";
import {deleteFoodpic} from "../../utils/picture/deleteFoodpic";
import {insertFoodpic} from "../../utils/picture/insertFoodpic";
import {selectAllFoodpics} from "../../utils/picture/selectAllFoodpics";
import {selectFoodpicByFoodpicProfileId} from "../../utils/picture/selectFoodpicByFoodpicProfileId";

export const FoodpicRoute = Router()

FoodpicRoute.route("/")
	.post(postFoodpicController)
	.get(getAllFoodpicsController)

FoodpicRoute.route("/:foodpicId")
	.delete(deleteFoodpicController)

FoodpicRoute.route("/:profileId")
	.get(getFoodpicByFoodpicProfileIdController)
