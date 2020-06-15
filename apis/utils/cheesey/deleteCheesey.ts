import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";

export async function deleteCheesey(cheeseyFoodpicId : string, cheeseyProfileId : string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "DELETE FROM cheesey WHERE cheeseyFoodpicId = UUID_TO_BIN(:cheeseyFoodpicId) AND cheeseyProfileId = UUID_TO_BIN(:cheeseyProfileId)"

        const [rows] = await mySqlConnection.execute(mySqlQuery, {cheeseyFoodpicId, cheeseyProfileId})
        return "Cheesey Successfully Deleted"
    } catch (error) {
        console.log(error)
    }
}