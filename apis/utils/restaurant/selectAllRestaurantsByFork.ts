import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function selectTopRestaurantsByFork(restaurant: Restaurant) {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantIdteId) AS restaurantId, restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl FROM fork INNER JOIN restaurant on fork.forkRestaurantId = restaurant.restaurantId WHERE forkRestaurantId = :restaurantId )";
    }
}

//ASK HELP FROM KATHLEEN