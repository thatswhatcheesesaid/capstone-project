import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {AboutUsPage} from "./pages/AboutUsPage";


const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={AboutUsPage}/>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));