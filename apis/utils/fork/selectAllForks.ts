import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function selectAllForks() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(forkProfileId) AS forkProfileId, BIN_TO_UUID(forkRestaurantId) AS forkRestaurantId, forkScore FROM fork"
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
    }
}