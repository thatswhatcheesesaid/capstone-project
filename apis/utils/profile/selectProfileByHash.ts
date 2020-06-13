import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByHash(profileHash: string) {
    try {
        const mySqlConnection = await connect()

        const mySqlQuery = "SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileEmail, profileHash, profileName FROM profile WHERE profileHash = :profileHash"

        const [rows] = await mySqlConnection.execute(mySqlQuery, profileHash)

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}