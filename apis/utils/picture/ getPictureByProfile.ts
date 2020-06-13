import{Picture} from "../interfaces/picture";
import{connect} from "../../src/database";

export async function  getPictureByProfile(picture: Picture){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodpicId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic";
		const [rows] = await mySqlConnection.execute(mySqlQuery, picture)
		return "Got Pictures by profile"
	} catch (error) {
		console.log(error)
	}
}