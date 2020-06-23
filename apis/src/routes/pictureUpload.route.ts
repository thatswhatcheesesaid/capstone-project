import { Router } from 'express';
import {imageUploadController} from "../controllers/pictureUpload.controller";
import {imageUploader} from "../lib/multer";

export const ImageUploadRouter = Router();

ImageUploadRouter.route('/')
    .post(imageUploader, imageUploadController);
