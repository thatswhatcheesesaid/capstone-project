import{NextFunction, Request, Response} from "express";
import {Restaurant} from "../../utils/interfaces/restaurant";
import {Status} from "../../utils/interfaces/status";
import{deleteRestaurant} from "../../utils/restaurant/deleteRestaurant";
import{insertRestaurant} from "../../utils/restaurant/insertRestaurant";
import{selectAllRestaurants} from "../../utils/restaurant/selectAllRestaurants";
import {validationResult} from "express-validator";
import { v1 as uuidv1 } from 'uuid';

export async function deleteRestaurantController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {restaurantId} = request.params;
        const data = await deleteRestaurant(restaurantId);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllRestaurantsController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllRestaurants();
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function postRestaurantController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {restaurantId, restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl} = request.body;
        const restaurant: Restaurant = {restaurantId: uuidv1(), restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl};
        const result = await insertRestaurant(restaurant)
        return response.json({status:200, data:null, message: result})
    } catch (error) {
        console.log(error)
    }
}

export async function getTop5RestaurantController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const reply = await selectAllRestaurants();
        const handleReply = (reply: any[]) => reply.splice(0, 5)
        console.log(reply)
        const data = reply ? handleReply(reply) : []
        const status: Status = {status:200, data: data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}