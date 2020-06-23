import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import { Footer } from './pages/Footer';
import {LandingPage} from './pages/LandingPage/LandingPage'
import {ProfilePage} from './pages/ProfilePage/ProfilePage'
import {StaticNavbar} from './pages/StaticNavbar'
import {SignUp} from "./pages/SignUp/SignUp";
import {RestaurantPage} from './pages/RestaurantPage/RestaurantPage'
import {AboutUsPage} from "./pages/AboutUsPage";
import {PicturePage} from './pages/PicturePage/PicturePage'
import {ResetPage} from './pages/ResetPage'
import{LogInSignUp} from './pages/SignUpPage/LogInSignUpPage'

import reducer from "./store"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'





const store = configureStore({reducer})

const Routing = () => (

  <>
    <Provider store={store}>
    <React.StrictMode>
      <StaticNavbar/>
    </React.StrictMode>

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/restaurants" component={RestaurantPage}/>
        <Route exact path="/logIn" component={SignUp}/>
        <Route exact path="/aboutUs" component={AboutUsPage}/>
        <Route exact path="/cheesey" component={PicturePage}/>
        <Route exact path="/reset" component={ResetPage}/>
        <Route exact path="/logInSignUp" component={LogInSignUp}/>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>


    <React.StrictMode>
      <Footer/>
    </React.StrictMode>


    </Provider>
    </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'));