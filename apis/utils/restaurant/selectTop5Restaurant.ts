import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function selectEveryRestaurant() {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl FROM restaurant";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}