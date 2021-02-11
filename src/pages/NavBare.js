import React from "react";
import {Link} from "react-router-dom";

function NavBare() {
          return (
            <header>
            <div className="container">
            <div className="header-data">
              <div className="logo">
                  <a href="index.html" title=""><img src="Assets/images/logo.png" alt=""/></a>
              </div>
              <div className="search-bar">
                  <form>
                      <input type="text" name="search" placeholder="Search..."/>
                      <button type="submit"><i className="la la-search"></i></button>
                  </form>
              </div>
              <nav>
                  <ul>
                      <Link to='/'>
                      <li>

                          <a title="">
                              <span><img src="Assets/images/icon1.png" alt=""/></span>
                              Home
                          </a>
                      </li>
                      </Link>
                      
                      <Link to='/MyProfile'>
                      <li>
                          <a  title="">
                              <span><img src="Assets/images/icon4.png" alt=""/></span>
                              Profiles
                          </a>
                         
                      </li>
                      </Link>
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
                      <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
                  </div>
              </div>
            </div>
            </div>
            </header>
          );
}


export default NavBare;


