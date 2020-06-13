import{NextFunction, Request, Response} from "express";
import {Profile} from "../../utils/interfaces/profile";
import {Status} from "../../utils/interfaces/status";
import{deleteProfile} from "../../utils/profile/deleteProfile";
import{insertProfile} from "../../utils/profile/insertProfile";
import{selectProfileByEmail} from "../../utils/profile/selectProfileByEmail";
import{selectProfileByHash} from "../../utils/profile/selectProfileByHash";

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

export async function getProfileByHashController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileHash} = request.params;
        const data = await selectProfileByEmail(profileHash);
        const status: Status = {status:200, data, message: null};
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postProfileController(request: Request, response:Response, nextFunction: NextFunction) {
    try {
        const {profileId, profileActivationToken, profileEmail, profileName, profileHash} = request.body;
        const profile: Profile = {profileId: null, profileActivationToken, profileEmail, profileName, profileHash};
        const result = await insertProfile(profile)
        return response.json({status:200, data:null, message: result})
    } catch (error) {
        console.log(error)
    }
}


