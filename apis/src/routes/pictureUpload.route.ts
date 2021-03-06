import { Router } from 'express';
import {imageUploadController} from "../controllers/pictureUpload.controller";
import {imageUploader} from "../lib/multer";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

export const ImageUploadRouter = Router();

ImageUploadRouter.route('/')
    .post(isLoggedIn, imageUploader, imageUploadController);
