import{Picture} from "../interfaces/picture";
import{connect} from "../../src/database";

export async function selectAllPictures(picture: Picture){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic";
		const [rows] = await mySqlConnection.execute(mySqlQuery, picture)
		return "All pictures selected successfully"
	} catch (error) {
		console.log(error)
	}
}


