import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function  selectFoodpicByFoodpicProfileId(foodpicProfileId: string){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicProfileId) AS foodpicProfileId, BIN_TO_UUID(foodpicRestaurantId) AS foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic WHERE foodpicProfileId = UUID_TO_BIN(:foodpicProfileId)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, {foodpicProfileId})
		return rows
	} catch (error) {
		console.log(error)
	}
}