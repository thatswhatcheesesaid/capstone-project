import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function updateProfile(profile: { profileName: string; profileEmail: string; profileActivationToken: null; profileId: string | null; profileHash: string }) {
	try {

		const mysqlConnection = await connect();
		const query : string = 'UPDATE profile SET profileActivationToken = :profileActivationToken, profileEmail = :profileEmail, profileHash = :profileHash, profileName = :profileName WHERE profileId = UUID_TO_BIN(:profileId)';

		const [rows] = await mysqlConnection.execute(query, profile);
		return 'Profile successfully updated'
	} catch (e) {
		console.error(e)
		return null
	}
}