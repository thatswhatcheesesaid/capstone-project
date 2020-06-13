import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function selectAllForks(fork: Fork) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID() AS forkProfileId, forkRestaurantId, forkScore FROM fork"
        const [rows] = await mySqlConnection.execute(mySqlQuery, fork)
        return "All Forks selected successfully"
    } catch (error) {
        console.log(error)
    }
}

//left out () after BIN_TO_UUID on line 7 - no primary key