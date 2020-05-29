import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import { PicturePage } from './pages/PicturePage'
import {ProfilePage} from './pages/ProfilePage'

const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        {/*<Route exact path="/" component={ProfilePage}/>*/}
        <Route component={PicturePage}/>
        <Route component={Home}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));