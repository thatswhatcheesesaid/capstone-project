import {Fork} from "../interfaces/fork";
import {connect} from "../../src/database";

export async function selectForkByProfileIdAndRestaurantId(profileId : string, restaurantId : string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(forkProfileId) AS forkProfileId, BIN_TO_UUID(forkRestaurantId) AS forkRestaurantId, forkScore FROM fork WHERE forkProfileId = UUID_TO_BIN(:profileId) AND forkRestaurantId = UUID_TO_BIN(:restaurantId)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId, restaurantId})
        return rows
    } catch (error) {
        console.log(error)
    }
}
