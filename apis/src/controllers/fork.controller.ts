import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Fork} from "../../utils/interfaces/fork";
import {insertForkScore} from "../../utils/fork/insertForkScore";
import {selectForkByProfileIdAndRestaurantId} from "../../utils/fork/selectForkByProfileIdAndRestaurantId";
import {selectAllForks} from "../../utils/fork/selectAllForks"
import {selectAllCheesey} from "../../utils/cheesey/selectAllCheesey";
import {validationResult} from "express-validator";

export async function getForkByProfileIdAndRestaurantIdController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {profileId, restaurantId} = request.params
        const data = await selectForkByProfileIdAndRestaurantId(profileId, restaurantId)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllForksController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllForks()
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postForkScoreController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {forkRestaurantId, forkScore} = request.body
        const profile = request?.session?.profile
        const forkProfileId = profile?.profileId ?? null
        const fork: Fork = {forkProfileId, forkRestaurantId, forkScore}
        const result = await insertForkScore(fork)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}