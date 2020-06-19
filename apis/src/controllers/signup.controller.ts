import {Request, Response} from 'express';

//DB
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {Profile} from "../../utils/interfaces/profile";
import {Status} from "../../utils/interfaces/status";
import {insertProfile} from "../../utils/profile/insertProfile";
import MailComposer from "nodemailer/lib/mail-composer";
const mailgun = require("mailgun-js")

export async function signupProfileController (request: Request, response: Response) {
    try {
        const {profileEmail, profileName, profilePassword} = request.body;
        console.log(request.body)
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const basePath = `${request.protocol}://${request.get(`host`)}${request.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to That's What Cheese Said!</h2>
        <p>In order to start voting on restaurants and pictures you must confirm your account <p>
        <p><a href="${basePath}">${basePath}</a></p>
        `

        const mailgunMessage = {
                from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
                to: profileEmail,
                subject: "One Step closer -- Account Activation",
                text: 'Test email text',
                html: message
        }

        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileEmail,
            profileHash,
            profileName
        };

        const result = await insertProfile(profile)

        // const status: Status = {
        //     status: 200,
        //     message:"Sign up successful",
        //     data: null
        // };

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            console.log(message.toString("ascii"))
            const compiledEmail = {
                    to: profileEmail,
                    message: message.toString("ascii")
            }

            const status: Status = {
                    status: 200,
                    message: "Profile successfully created please check your email",
                    data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                    if (sendError) {
                            console.log(sendError);
                            return;
                    }
                    return response.json(status);
            });
        })

        // return response.json(status);

    } catch (error) {
        const status: Status = {
            status: 400,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}