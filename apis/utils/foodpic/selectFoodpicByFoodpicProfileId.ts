import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function  selectFoodpicByFoodpicProfileId(profileId: string){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodpicId, SELECT BIN_TO_UUID(foodpicProfileId) AS foodpicProfileId,  SELECT BIN_TO_UUID(foodpicRestaurantId) AS foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic WHERE foodpicProfileId = UUID_TO_BIN(:profileId)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
		return "Selected Foodpics by profile"
	} catch (error) {
		console.log(error)
	}
}