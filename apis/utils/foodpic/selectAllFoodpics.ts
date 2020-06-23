import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function selectAllFoodpics(){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodpicId, BIN_TO_UUID(foodpicProfileId) AS foodpicProfileId, BIN_TO_UUID(foodpicRestaurantId) AS foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic";
		const [rows] = await mySqlConnection.execute(mySqlQuery)
		//@ts-ignore
		return rows.length !== 0 ? [...rows] : undefined;
	} catch (error) {
		console.log(error)
		return undefined
	}
}



