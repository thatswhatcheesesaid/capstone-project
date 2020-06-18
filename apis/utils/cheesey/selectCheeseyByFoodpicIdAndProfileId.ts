import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";

export async function selectCheeseyByFoodpicIdAndProfileId(foodpicId: string, profileId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(cheeseyFoodpicId) AS cheeseyFoodpicId, BIN_TO_UUID(cheeseyProfileId) AS cheeseyProfileId, cheeseyScore FROM cheesey WHERE cheeseyProfileId = UUID_TO_BIN(:profileId) AND cheeseyFoodpicId = UUID_TO_BIN(:foodpicId)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, {foodpicId, profileId})
        return rows
    } catch (error) {
        console.log(error)
    }
}