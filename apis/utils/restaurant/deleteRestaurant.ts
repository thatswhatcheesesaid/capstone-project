import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function deleteRestaurant(restaurant: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery ="DELETE FROM restaurant WHERE restaurantId = VALUES(UUID_TO_BIN(UUID())"
        const [rows] = await mySqlConnection.execute(mySqlQuery, restaurant)
        return "Restaurant deleted successfully"
    } catch (error) {
        console.log(error)
    }
}

//ASK FOR HELP WITH THIS ONE TOO