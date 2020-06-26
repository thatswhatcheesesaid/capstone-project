import multer, {StorageEngine} from "multer";
import {Express, Request} from "express";

/*
 * @see https://medium.com/@joeokpus/uploading-images-to-cloudinary-using-multer-and-expressjs-f0b9a4e14c54
 */

const storage : StorageEngine = multer.memoryStorage()
const limits  = {fields: 2, files: 1, parts: 2 }
const fileFilter : any = ( request: Request, file : Express.Multer.File , callback : any) => {
    const {originalname} = file
    return originalname.match(/\.(jpg|jpeg|png|gif)$/)
        ? callback(null, true)
        : callback(new Error("only images are allowed to be uploaded"), false)
}

export const imageUploader = multer({storage, limits, fileFilter}).single('image')
