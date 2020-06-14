import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function deleteFork(forkProfileId : string, forkRestaurantId : string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "DELETE FROM fork WHERE forkProfileId = UUID_TO_BIN(:forkProfileId) AND forkRestaurantId = UUID_TO_BIN(:forkRestaurantId)"

        const [rows] = await mySqlConnection.execute(mySqlQuery, {forkProfileId, forkRestaurantId})
        return "Fork Successfully Deleted"
    } catch (error) {
        console.log(error)
    }
}