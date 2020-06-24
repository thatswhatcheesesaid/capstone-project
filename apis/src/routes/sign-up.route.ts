import { Router } from 'express';
import { signupProfileController } from '../controllers/signup.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {signupValidator} from "../validators/sign-up.validator";
import {activationController} from "../controllers/activation.controller";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";


const { checkSchema } = require('express-validator');

export const signupRouter = Router();


signupRouter.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(signupValidator)), signupProfileController);

signupRouter.route('/activation/:activation').get(activationController)