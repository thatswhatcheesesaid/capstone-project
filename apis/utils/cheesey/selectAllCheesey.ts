import {Cheesey} from "../interfaces/cheesey";
import {connect} from "../../src/database";

export async function selectAllCheesey(cheesey: Cheesey) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID AS cheeseyFoodpicId, cheeseyProfileId, cheeseyScore FROM cheesey"
    }
}