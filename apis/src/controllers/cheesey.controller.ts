import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Cheesey} from "../../utils/interfaces/cheesey";
import {insertCheeseyScore} from "../../utils/cheesey/insertCheeseyScore";
import {selectCheeseyByFoodpicIdAndProfileId} from "../../utils/cheesey/selectCheeseyByFoodpicIdAndProfileId";

export async function getCheeseyByFoodpicIdAndProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {foodpicId, profileId} = request.params
        const data = await selectCheeseyByFoodpicIdAndProfileId(foodpicId, profileId)
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postCheeseyScoreController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {cheeseyFoodpicId, cheeseyProfileId, cheeseyScore} = request.body

        const cheesey: Cheesey = {cheeseyFoodpicId, cheeseyProfileId, cheeseyScore}
        const result = await insertCheeseyScore(cheesey)
        return response.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}