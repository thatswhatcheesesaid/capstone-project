import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import { Footer } from './pages/Footer';
import {LandingPage} from './pages/LandingPage'
import {ProfilePage} from './pages/ProfilePage'
import {StaticNavbar} from './pages/StaticNavbar'
import {RestaurantPage} from './pages/RestaurantPage'

const Routing = () => (
  <>

    <React.StrictMode>
      <StaticNavbar/>
    </React.StrictMode>

    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/restaurants" component={RestaurantPage}/>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>


    <React.StrictMode>
      <Footer/>
    </React.StrictMode>


  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));