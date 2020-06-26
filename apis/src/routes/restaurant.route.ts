import {Router} from "express";
import {
    deleteRestaurantController,
    getAllRestaurantsController,
    postRestaurantController,
    getTop5RestaurantController
} from "../controllers/restaurant.controller";
import {deleteRestaurant} from "../../utils/restaurant/deleteRestaurant";
import {insertRestaurant} from "../../utils/restaurant/insertRestaurant";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";

export const RestaurantRoute = Router()

RestaurantRoute.route("/")
    .get(getAllRestaurantsController)
    .post(postRestaurantController)

RestaurantRoute.route("/:restaurantId")
    .delete(deleteRestaurantController)

RestaurantRoute.route("/top5")
    .get(getTop5RestaurantController)

