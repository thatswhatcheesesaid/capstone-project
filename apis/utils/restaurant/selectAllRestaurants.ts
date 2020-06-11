import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function selectTopRestaurantsByFork(restaurant: Restaurant) {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantIdteId) AS restaurantId, restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl FROM restaurant";
    } catch (error) {
        console.log(error)
        return undefined
    }
}

//ASK HELP FROM KATHLEEN