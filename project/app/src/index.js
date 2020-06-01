import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import { Footer } from './pages/Footer';
import {LandingPage} from './pages/LandingPage'

const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
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