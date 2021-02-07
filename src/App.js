import React, { Component } from "react";
import logo from './logo.svg'; /*bdel hada l chi logo dialna*/ 
import './App.css';

import { BrowserRouter as Router,
Route,
Switch,
Links, /* we use like this : import { link from "react-router-dom"; 
 then inside the const we write : <link to="/path">linktext</link>}*/
Redirect 
} from "react-router-dom";

//pages
import MainPage from "./pages/Home";
import NotFoundPage from "./pages/404";
import LoginPage from "./pages/login";


class App extends Component {
  render()
  {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginPage}/>
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/404" component={NotFoundPage}/>
      <Redirect to="/404"/>

      </Switch>
    </Router>
    );
  }
}

export default App;
