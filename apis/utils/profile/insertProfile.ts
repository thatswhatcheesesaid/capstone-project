import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function insertProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        console.log(profile)
        const mySqlQuery = "INSERT INTO profile(profileId, profileActivationToken, profileEmail, profileHash, profileName) VALUES(UUID_TO_BIN(UUID()), :profileActivationToken, :profileEmail, :profileHash, :profileName)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, profile)

        return "Profile added successfully"
    } catch (error) {
        console.log(error)
        return undefined
    }
}