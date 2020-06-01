import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import { Footer } from './pages/Footer'



const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
        <Route component={RestaurantPage}/>
      </Switch>
    </BrowserRouter>

    <React.StrictMode>
      <Footer/>
    </React.StrictMode>

  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));