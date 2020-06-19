import express, {Application, Errback, ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
//Routes
import {indexRoutes} from "./routes/index.route";
import {ForkRoute} from "./routes/fork.route";
import {FoodpicRoute} from "./routes/foodpic.route";
import {ProfileRoute} from "./routes/profile.route";
import {signupRouter} from "./routes/sign-up.route";
import {RestaurantRoute} from "./routes/restaurant.route";
import {CheeseyRoute} from "./routes/cheesey.route";
import{SignInRouter} from "./routes/sign-in.route"
import {passportMiddleware} from "./controllers/sign-in.controller";
import passport from "passport";
const cookieParser = require('cookie-parser')
const session = require("express-session")
const MemoryStore = require ("memorystore")(session)


// The following class creates the app and instantiates the server
export class App {

    app: Application;

    constructor (
        private port?: number | string
    ) {
        passportMiddleware; //es-lint-disable-line
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }


    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () {
        this.app.use(morgan('dev'));
        this.app.use(express.json());


        const sessionConfig = {
            store: new MemoryStore({
                checkPeriod: 10800,
            }),
            secret: process.env.sessionSecret,
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        }
        this.app.use(session(sessionConfig))
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        this.app.use("/apis/fork", ForkRoute)
        this.app.use("/apis/foodpic", FoodpicRoute)
        this.app.use("/apis/profile", ProfileRoute)
        this.app.use("/apis/signup", signupRouter)
        this.app.use('/apis/restaurant', RestaurantRoute);
        this.app.use("/apis", indexRoutes);
        this.app.use("/apis/cheesey", CheeseyRoute)
        this.app.use("apis/sign-up", SignInRouter)
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}