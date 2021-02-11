
import React from "react";
import {Link} from "react-router-dom";
import PostView from "./PostView";

function Body() {

          return (
              
            <div>
<main>
<div className="main-section">
<div className="container">
  <div className="main-section-data">
      <div className="row">
          <div className="col-lg-3 col-md-4 pd-left-none no-pd">
              <div className="main-left-sidebar no-margin">
                  <div className="user-data full-width">
                      <div className="user-profile">
                          <div className="username-dt">
                              <div className="usr-pic">
                                  <img src="http://via.placeholder.com/100x100" alt=""/>
                              </div>
                          </div>
                          <div className="user-specs">
                              <h3>John Doe</h3>
                              <span>Graphic Designer at Self Employed</span>
                          </div>
                      </div>
                      <ul className="user-fw-status">
                          <li>
                              <h4>Following</h4>
                              <span>34</span>
                          </li>
                          <li>
                              <h4>Followers</h4>
                              <span>155</span>
                          </li>
                          <Link to='/MyProfile'>
                          <li>
                              <a  title="">View Profile</a>
                          </li>
                          </Link>
                      </ul>
                  </div>
                  <div className="suggestions full-width">
                      <div className="sd-title">
                          <h3>Suggestions</h3>
                          <i className="la la-ellipsis-v"></i>
                      </div>
                      <div className="suggestions-list">
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Poonam</h4>
                                  <span>Wordpress Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Bill Gates</h4>
                                  <span>C & C++ Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="view-more">
                              <a href="#" title="">View More</a>
                          </div>
                      </div>
                  </div>
                  <div className="tags-sec full-width">
                      <ul>
                          <li><a href="#" title="">Help Center</a></li>
                          <li><a href="#" title="">About</a></li>
                          <li><a href="#" title="">Privacy Policy</a></li>
                          <li><a href="#" title="">Community Guidelines</a></li>
                          <li><a href="#" title="">Cookies Policy</a></li>
                          <li><a href="#" title="">Career</a></li>
                          <li><a href="#" title="">Language</a></li>
                          <li><a href="#" title="">Copyright Policy</a></li>
                      </ul>
                      <div className="cp-sec">
                          <img src="../public/Assets/images/logo2.png" alt=""/>
                          <p><img src="../public/Assets/images/cp.png" alt=""/>Copyright 2018 </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-8 no-pd">
              <div className="main-ws-sec">
                  <div className="post-topbar">
                      <div className="user-picy">
                          <img src="../public/Assets/http://via.placeholder.com/100x100" alt=""/>
                      </div>
                      <div className="post-st">
                          <ul>
                            
                              <li><a className="post-jb active" href="#" title="">Post a Job</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="posts-section">
                   
                        <PostView />
                      
                        <PostView />
                   
                        <PostView />
                  
                        <PostView />
                      <div className="process-comm">
                          <div className="spinner">
                              <div className="bounce1"></div>
                              <div className="bounce2"></div>
                              <div className="bounce3"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-3 pd-right-none no-pd">
              <div className="right-sidebar">
                  <div className="widget widget-about">
                      <img src="../public/Assets/images/wd-logo.png" alt=""/>
                      <h3>Track Time on Workwise</h3>
                      <span>Pay only for the Hours worked</span>
                      <div className="sign_link">
                          <h3><a href="#" title="">Sign up</a></h3>
                          <a href="#" title="">Learn More</a>
                      </div>
                  </div>
                  <div className="widget widget-jobs">
                      <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v"></i>
                      </div>
                      <div className="jobs-list">
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior Product Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior UI / UX Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Junior Seo Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior PHP Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior Developer Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="widget widget-jobs">
                      <div className="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i className="la la-ellipsis-v"></i>
                      </div>
                      <div className="jobs-list">
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior Product Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Senior UI / UX Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div className="job-info">
                              <div className="job-details">
                                  <h3>Junior Seo Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div className="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="widget suggestions full-width">
                      <div className="sd-title">
                          <h3>Most Viewed People</h3>
                          <i className="la la-ellipsis-v"></i>
                      </div>
                      <div className="suggestions-list">
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Poonam</h4>
                                  <span>Wordpress Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Bill Gates</h4>
                                  <span>C &amp; C++ Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div className="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus"></i></span>
                          </div>
                          <div className="view-more">
                              <a href="#" title="">View More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div> 
</div>
</main>





<div className="post-popup job_post">
<div className="post-project">
<h3>Post</h3>
<div className="post-project-fields">
  <form>
      <div className="row">

          <div className="col-lg-12">
              <textarea name="description" placeholder="Description"></textarea>
          </div>
          <div className="col-lg-12">
              <ul>
                  <li><button className="active" type="submit" value="post">Post</button></li>
                
              </ul>
          </div>
      </div>
  </form>
</div>
<a href="#" title=""><i className="la la-times-circle-o"></i></a>
</div>
</div>

</div>
 
           
            );
    }


export default Body;