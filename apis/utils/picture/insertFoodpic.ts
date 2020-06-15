import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function insertFoodpic(foodpic: Foodpic) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO foodpic(foodpicId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl) VALUES(UUID_TO_BIN(UUID()), :foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, foodpic)
		return "Inserted foodpic"
	} catch (error) {
		console.log(error)
	}
}