import React from "react";
import {Link} from "react-router-dom";

function NavBare() {
          return (
            <header>
            <div class="container">
            <div class="header-data">
              <div class="logo">
                  <a href="index.html" title=""><img src="Assets/images/logo.png" alt=""/></a>
              </div>
              <div class="search-bar">
                  <form>
                      <input type="text" name="search" placeholder="Search..."/>
                      <button type="submit"><i class="la la-search"></i></button>
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
              <div class="menu-btn">
                  <a href="#" title=""><i class="fa fa-bars"></i></a>
              </div>
              <div class="user-account">
                  <div class="user-info">
                      <img src="http://via.placeholder.com/30x30" alt=""/>
                      <a href="#" title="">John</a>
                      <i class="la la-sort-down"></i>
                  </div>
                  <div class="user-account-settingss">
                      
                      <h3>Setting</h3>
                      <ul class="us-links">
                          <li><a  title="">Account Setting</a></li>
                          <li><a title="">Privacy</a></li>
                          <li><a  title="">Terms & Conditions</a></li>
                      </ul>
                      <h3 class="tc"><a href="sign-in.html" title="">Logout</a></h3>
                  </div>
              </div>
            </div>
            </div>
            </header>
          );
}


export default NavBare;


