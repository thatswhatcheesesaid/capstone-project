import{NextFunction, Request, Response} from "express";
import {Profile} from "../../utils/interfaces/profile";
import {Status} from "../../utils/interfaces/status";
import{deleteProfile} from "../../utils/profile/deleteProfile";
import{insertProfile} from "../../utils/profile/insertProfile";
import{selectProfileByEmail} from "../../utils/profile/selectProfileByEmail";
import{selectProfileByActivationToken} from "../../utils/profile/selectProfileByActivationToken";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {selectAllProfiles} from "../../utils/profile/selectAllProfiles"
import {validationResult} from "express-validator";

export async function deleteProfileController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileId} = request.params;
        const data = await deleteProfile(profileId);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function getAllProfilesController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const data = await selectAllProfiles();
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
export async function getProfileByEmailController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileEmail} = request.params;
        const data = await selectProfileByEmail(profileEmail);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getProfileByActivationTokenController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileActivationToken} = request.params;
        const data = await selectProfileByActivationToken(profileActivationToken);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getProfileByProfileIdController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileId} = request.params;
        const data = await selectProfileByProfileId(profileId);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postProfileController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const { profileActivationToken, profileEmail, profileName, profileHash} = request.body;
        const profile: Profile = {profileId: null, profileActivationToken, profileEmail, profileHash, profileName};
        const result = await insertProfile(profile)
        return response.json({status:200, data:null, message: result})
    } catch (error) {
        return response.json({status: 500, message: error.message})
    }
}


