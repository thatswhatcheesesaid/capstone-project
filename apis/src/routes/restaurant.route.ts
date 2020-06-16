import {Router} from "express";
import {
    deleteRestaurantController,
    getAllRestaurantsController,
    postRestaurantController
} from "../controllers/restaurant.controller";
import {deleteRestaurant} from "../../utils/restaurant/deleteRestaurant";
import {insertRestaurant} from "../../utils/restaurant/insertRestaurant";
import {selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";

export const RestaurantRoute = Router()

RestaurantRoute.route("/restaurants")
    .get(getAllRestaurantsController)
    .post(postRestaurantController)

RestaurantRoute.route("/:restaurantId")
    .delete(deleteRestaurantController)

