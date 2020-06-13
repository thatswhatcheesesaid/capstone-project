import{Picture} from "../interfaces/picture";
import{connect} from "../../src/database";

export async function deletePicture(foodpicId: string) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "DELETE FROM picture WHERE foodpicId = UUID_TO_BIN(:foodpicId)"
		const [rows] = await mySqlConnection.execute(mySqlQuery,{foodpicId})
		return "Picture deleted successfully"
	} catch (error) {
		console.log(error)
	}
}