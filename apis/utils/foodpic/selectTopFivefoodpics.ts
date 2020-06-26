import{Foodpic} from "../interfaces/foodpic";
import{connect} from "../../src/database";

export async function selectTopFiveFoodpics() : Promise<any[] | undefined> {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(foodpic.foodpicId) as foodpicId, BIN_TO_UUID(foodpic.foodpicProfileId) as foodpicProfileId, BIN_TO_UUID(foodpic.foodpicRestaurantId) as foodpicRestaurantId, foodpic.foodpicCaption, foodpic.foodpicUrl, COUNT(cheesey.cheeseyScore) as cheeseyScore FROM foodpic LEFT JOIN cheesey on foodpic.foodpicId = cheesey.cheeseyFoodpicId GROUP BY foodpic.foodpicId ORDER BY cheeseyScore DESC";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        // @ts-ignore
        return rows.length !== 0 ? [...rows] : undefined;
    } catch (error) {
        console.log(error)
        return undefined
    }
}