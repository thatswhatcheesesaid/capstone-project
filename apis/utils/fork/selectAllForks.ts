import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function selectAllForks() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID() AS forkProfileId, forkRestaurantId, forkScore FROM fork"
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
    }
}

//left out () after BIN_TO_UUID on line 7 - no primary key