import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";

export async function selectAllCheesey() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(cheeseyFoodpicId) AS cheeseyFoodpicId, BIN_TO_UUID(cheeseyProfileId) AS cheeseyProfileId, cheeseyScore FROM cheesey"
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
    }
}