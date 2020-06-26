import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";


export async function insertCheeseyScore(cheesey: Cheesey) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO cheesey(cheeseyFoodpicId, cheeseyProfileId, cheeseyScore) VALUES(UUID_TO_BIN(:cheeseyFoodpicId), UUID_TO_BIN(:cheeseyProfileId), :cheeseyScore)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, cheesey)
        return 'CheeseyScore created successfully'
    } catch (error) {
        console.log("this is where i die a quiet death", error)
    }
}


//doublecheck to see if ids are needed, used express-misquote as example