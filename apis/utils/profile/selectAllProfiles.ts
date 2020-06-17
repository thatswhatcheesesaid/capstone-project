import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectAllProfiles() {
    try {
        const mySqlConnection = await connect()

        const mySqlQuery = "SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileEmail, profileHash, profileName FROM profile"

        const [rows] = await mySqlConnection.execute(mySqlQuery)

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}