import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {RestaurantPage} from './pages/RestaurantPage'

const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={FourOhFour}/>
        <Route component={RestaurantPage}/>
      </Switch>
    </BrowserRouter>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));