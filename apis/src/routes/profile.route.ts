import {Router} from "express";
import {
    deleteProfileController, getAllProfilesController,
    getProfileByActivationTokenController,
    getProfileByProfileIdController,
    postProfileController
} from "../controllers/profile.controller";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {selectProfileByActivationToken} from "../../utils/profile/selectProfileByActivationToken";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

export const ProfileRoute = Router()

ProfileRoute.route("/")
    .post(isLoggedIn, postProfileController)
    .get(getAllProfilesController)

ProfileRoute.route("/:profileId")
    .delete(deleteProfileController)
    .get(getProfileByProfileIdController)


ProfileRoute.route("/profileActivationToken/:profileActivationToken")
    .get(getProfileByActivationTokenController)