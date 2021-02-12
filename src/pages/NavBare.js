import React from "react";
import {Link} from "react-router-dom";

function NavBare() {
    function logout() {
        let url = 'http://localhost:8080/ChatWeb-1/User/logout';
        // Les données du POST
        let data = {
            token: localStorage.getItem("logintoken")
        };
        // Les options de la requete
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(data)
        };
        fetch(url, options)
        localStorage.removeItem("logintoken");
        window.location.reload();
    }

    return (
            <header>
            <div className="container">
            <div className="header-data">
              <div className="logo">
                  <a  title=""><img src="Assets/images/logo.png" alt=""/></a>
              </div>
              <div className="search-bar">
                  <form>
                      <input type="text" name="search" placeholder="Search..."/>
                      <button type="submit"><i className="la la-search"></i></button>
                  </form>
              </div>
              <nav>
                  <ul>
                      <li>
                          <Link to='/'>
                              <span><img src="Assets/images/icon1.png" alt=""/></span>
                              Home
                          </Link>
                      </li>

                      <li>
                      <Link to='/MyProfile'>
                              <span><img src="Assets/images/icon4.png" alt=""/></span>
                              Profiles
                      </Link>
                      </li>
                  </ul>
              </nav>
              <div className="menu-btn">
                  <a href="#" title=""><i className="fa fa-bars"></i></a>
              </div>
              <div className="user-account">
                  <div className="user-info">
                      <img src="http://via.placeholder.com/30x30" alt=""/>
                      <a href="#" title="">John</a>
                      <i className="la la-sort-down"></i>
                  </div>
                  <div className="user-account-settingss">
                      
                      <h3>Setting</h3>
                      <ul className="us-links">
                          <li><a  title="">Account Setting</a></li>
                          <li><a title="">Privacy</a></li>
                          <li><a  title="">Terms & Conditions</a></li>
                      </ul>
                      <h3 className="tc"><a href={""} onClick={logout} title="">Logout</a></h3>
                  </div>
              </div>
            </div>
            </div>
            </header>
          );
}


export default NavBare;


