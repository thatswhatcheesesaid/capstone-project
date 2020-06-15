import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function deleteFoodpic(foodpicId: string) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "DELETE FROM foodpic WHERE foodpicId = UUID_TO_BIN(:foodpicId)"
		const [rows] = await mySqlConnection.execute(mySqlQuery,{foodpicId})
		return "Foodpic deleted successfully"
	} catch (error) {
		console.log(error)
	}
}