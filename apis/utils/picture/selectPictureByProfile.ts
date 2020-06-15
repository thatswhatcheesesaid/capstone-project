import{Picture} from "../interfaces/picture";
import{connect} from "../../src/database";

export async function  selectFoodpicByFoodpicProfileId(profileId: string){
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(foodpicId) AS foodpicId, foodpicProfileId, foodpicRestaurantId, foodpicCaption, foodpicUrl FROM foodpic WHERE foodpicProfileId = UUID_TO_BIN(:profileId)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
		return "Selected Pictures by profile"
	} catch (error) {
		console.log(error)
	}
}