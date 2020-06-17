import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";

export async function insertRestaurant(restaurant: Restaurant) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery ="INSERT INTO restaurant(restaurantId, restaurantFeaturedPic, restaurantFeaturedPicCaption, restaurantGoogleLink, restaurantName, restaurantSocialMediaUrl) VALUES(UUID_TO_BIN(UUID()), :restaurantFeaturedPic, :restaurantFeaturedPicCaption, :restaurantGoogleLink, :restaurantName, :restaurantSocialMediaUrl)"
		const [rows] = await mySqlConnection.execute(mySqlQuery, restaurant)
		return "Restaurant created successfully"
	} catch (error) {
		console.log(error)
	}
}
