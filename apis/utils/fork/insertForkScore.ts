import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function insertForkScore(fork: Fork) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO fork(forkProfileId, forkRestaurantId, forkScore) VALUES(UUID_TO_BIN(UUID()), :forkProfileId, :forkRestaurantId, :forkScore)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, fork)
        return 'ForkScore created successfully'
    } catch (error) {
        console.log(error)
    }
}