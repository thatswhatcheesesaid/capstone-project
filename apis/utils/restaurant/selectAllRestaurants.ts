import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function selectAllRestaurants() : Promise<any[] | undefined> {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurant.restaurantId) as restaurantId, restaurant.restaurantFeaturedPic, restaurant.restaurantFeaturedPicCaption, restaurant.restaurantGoogleLink, restaurant.restaurantName, restaurant.restaurantSocialMediaUrl, SUM(fork.forkScore) as forkScore FROM restaurant LEFT JOIN fork on restaurant.restaurantId = fork.forkRestaurantId GROUP BY restaurant.restaurantId ORDER BY forkScore DESC";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        // @ts-ignore
        return [...rows]
    } catch (error) {
        console.log(error)
        return undefined
    }
}
