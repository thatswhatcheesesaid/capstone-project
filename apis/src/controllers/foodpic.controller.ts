import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Foodpic} from "../../utils/interfaces/foodpic";
import {deleteFoodpic} from "../../utils/foodpic/deleteFoodpic";
import {insertFoodpic} from "../../utils/foodpic/insertFoodpic";
import {selectFoodpicByFoodpicProfileId} from "../../utils/foodpic/selectFoodpicByFoodpicProfileId";
import {selectAllFoodpics} from "../../utils/foodpic/selectAllFoodpics";
import {validationResult} from "express-validator";
import exp from "constants";

export async function deleteFoodpicController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {foodpicId} = request.params
		const data = await deleteFoodpic(foodpicId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch(error) {
		console.log(error)
	}
}

export async function postFoodpicController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl} = request.body
		const foodpic: Foodpic = {foodpicId: null, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl}
		const result = await insertFoodpic(foodpic)
		return response.json({status: 200, data: null, message: result})
	} catch(error) {
		console.log(error)
	}
}

export async function getFoodpicByFoodpicProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {foodpicProfileId} = request.params
		const data = await selectFoodpicByFoodpicProfileId(foodpicProfileId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	}catch(error) {
		console.log(error)
	}
}

export async function getAllFoodpicsController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const data = await selectAllFoodpics()
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	}catch(error) {
		console.log(error)
	}
}

export async function getTopFiveFoodpicsController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const reply = await selectAllFoodpics()
		const handleReply = (reply: any[]) => reply.splice(0,5)
		const data = reply ? handleReply(reply) : []
		const status: Status = {status: 200, data:data, message: null}
		return response.json(status)
	}catch(error) {
		console.log(error)
	}
}


export async function getTwoRandomFoodpicsController (request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const reply = await selectAllFoodpics()
		//randomizing function needed
		const handleReply = (reply: any[]) => reply.splice(0,2)
		const data = reply ? handleReply(reply) : []
		const status: Status = {status: 200, data:data, message: null}
		return response.json(status)
	}catch(error) {
		console.log(error)
	}
}
