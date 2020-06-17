import {Restaurant} from "../interfaces/restaurant";
import {connect} from "../../src/database";


//this breaks stuff
export async function deleteRestaurant(restaurantId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery ="DELETE FROM restaurant WHERE restaurantId = UUID_TO_BIN(:restaurantId)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, {restaurantId})
        return "Restaurant deleted successfully"
    } catch (error) {
        console.log(error)
    }
}

//export below does not break stuff
// export async function deleteRestaurant(restaurant: string) {
//     try {
//         const mySqlConnection = await connect()
//         const mySqlQuery ="DELETE FROM restaurant WHERE restaurantId = VALUES(UUID_TO_BIN(UUID())"
//         const [rows] = await mySqlConnection.execute(mySqlQuery, restaurant)
//         return "Restaurant deleted successfully"
//     } catch (error) {
//         console.log(error)
//     }
// }

//ASK FOR HELP WITH THIS ONE TOO