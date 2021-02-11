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
function App() {
  return (
  
      <div className="App">
    
   
      <Router>
      
      <Switch>
    <Route exact path="/LoginPage" component = {LoginPage} />
    <NavBare/>

    </Switch>
       
        <Route exact path="/" component = {Body} />
        <Route exact path="/MyProfile" component = {MyProfile} />
      

      </Router>
      
    

      </div>

  )
}

export default App;
