import React, { Component } from "react";
import { BrowserRouter as Router,
  Route,
  Switch,
  Links,
  Redirect
  } from "react-router-dom";

//pages
import NavBare from './pages/NavBare';
import Body from './pages/Body';
import MyProfile from './pages/MyProfile';
import LoginPage from './pages/LoginPage';
import Search from "./pages/Search";
function App() {

    if ("logintoken" in localStorage) {
        return (
            <div className="App">
                <Router>
                    <NavBare/>
                    <Route exact path="/" component = {Body} />
                    <Route exact path="/MyProfile" component = {MyProfile} />
                    <Route exact path="/Search/:id" component = {Search} />
                </Router>
            </div>
        )
    } else {
        return (
            <div className="App">
                <Router>
                        <Route exact path="/" component = {LoginPage} />
                </Router>
            </div>

        )
    }

}

export default App;
