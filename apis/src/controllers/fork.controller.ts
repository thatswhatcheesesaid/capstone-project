import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Fork} from "../../utils/interfaces/fork";
import {insertForkScore} from "../../utils/fork/insertForkScore";
import {selectAllForks} from "../../utils/fork/selectAllForks";

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
        const {forkProfileId, forkRestaurantId, forkScore} = request.body
        const fork: Fork = {forkProfileId, forkRestaurantId, forkScore}
        const result = await insertForkScore(fork)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}