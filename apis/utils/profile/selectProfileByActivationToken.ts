import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function selectProfileByActivationToken(profileActivationToken: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileEmail, profileHash, profileName FROM profile WHERE profileActivationToken = :profileActivationToken"
        const [rows] = await mySqlConnection.execute(mySqlQuery, {profileActivationToken})
        //@ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}