import{Picture} from "../interfaces/picture";
import{connect} from "../../src/database";

export async function insertPicture(picture: Picture) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO picture(foodpicId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl) VALUES(UUID_TO_BIN(UUID()), :foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, picture)
		return "Inserted picture"
	} catch (error) {
		console.log(error)
	}
}