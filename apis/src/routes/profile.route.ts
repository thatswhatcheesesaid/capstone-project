import {Router} from "express";
import {
    deleteProfileController,
    getProfileByEmailController,
    getProfileByHashController,
    postProfileController
} from "../controllers/profile.controller";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {selectProfileByEmail} from "../../utils/profile/selectProfileByEmail";
import {selectProfileByHash} from "../../utils/profile/selectProfileByHash";

export const ProfileRoute = Router()

ProfileRoute.route("/")
    .post(postProfileController)

ProfileRoute.route("/:profileId")
    .delete(deleteProfileController)

ProfileRoute.route("/:profileEmail")
    .get(getProfileByEmailController)

ProfileRoute.route("/:profileHash")
    .get(getProfileByHashController)