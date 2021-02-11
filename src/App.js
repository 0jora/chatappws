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

function App() {
  return (
  
      <div className="App">
      <Router>
        <NavBare/>
        <Route exact path="/" component = {Body} />
        <Route exact path="/MyProfile" component = {MyProfile} />

      </Router>


      </div>

  )
}

export default App;
