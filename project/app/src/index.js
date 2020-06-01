import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {StaticNavbar} from './pages/StaticNavbar'

const Routing = () => (
  <>

    <React.StrictMode>
      <StaticNavbar/>
    </React.StrictMode>

    <BrowserRouter>
      <Switch>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>



  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));