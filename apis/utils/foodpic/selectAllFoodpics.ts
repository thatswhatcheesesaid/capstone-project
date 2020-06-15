import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function selectAllFoodpics(){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodpicId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic";
		const [rows] = await mySqlConnection.execute(mySqlQuery)
		return rows
	} catch (error) {
		console.log(error)
		return undefined
	}
}



