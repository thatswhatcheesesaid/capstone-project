import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";

export async function insertCheeseyScore(cheesey: Cheesey) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO cheesey(cheeseyProfileId, cheeseyFoodPicId, cheeseyScore) VALUES(UUID_TO_BIN(UUID()), :cheeseyProfileId, :cheeseyFoodPicId, :cheeseyScore)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, cheesey)
        return 'CheeseyScore created successfully'
    } catch (error) {
        console.log(error)
    }
}