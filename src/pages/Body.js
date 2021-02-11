
import React from "react";
import {Link} from "react-router-dom";
import PostView from "./PostView";

function Body() {

          return (
              
            <div>
<main>
<div class="main-section">
<div class="container">
  <div class="main-section-data">
      <div class="row">
          <div class="col-lg-3 col-md-4 pd-left-none no-pd">
              <div class="main-left-sidebar no-margin">
                  <div class="user-data full-width">
                      <div class="user-profile">
                          <div class="username-dt">
                              <div class="usr-pic">
                                  <img src="http://via.placeholder.com/100x100" alt=""/>
                              </div>
                          </div>
                          <div class="user-specs">
                              <h3>John Doe</h3>
                              <span>Graphic Designer at Self Employed</span>
                          </div>
                      </div>
                      <ul class="user-fw-status">
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
                  <div class="suggestions full-width">
                      <div class="sd-title">
                          <h3>Suggestions</h3>
                          <i class="la la-ellipsis-v"></i>
                      </div>
                      <div class="suggestions-list">
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Poonam</h4>
                                  <span>Wordpress Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Bill Gates</h4>
                                  <span>C & C++ Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="view-more">
                              <a href="#" title="">View More</a>
                          </div>
                      </div>
                  </div>
                  <div class="tags-sec full-width">
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
                      <div class="cp-sec">
                          <img src="../public/Assets/images/logo2.png" alt=""/>
                          <p><img src="../public/Assets/images/cp.png" alt=""/>Copyright 2018 </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6 col-md-8 no-pd">
              <div class="main-ws-sec">
                  <div class="post-topbar">
                      <div class="user-picy">
                          <img src="../public/Assets/http://via.placeholder.com/100x100" alt=""/>
                      </div>
                      <div class="post-st">
                          <ul>
                            
                              <li><a class="post-jb active" href="#" title="">Post a Job</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="posts-section">
                   
                        <PostView />
                      
                        <PostView />
                   
                        <PostView />
                  
                        <PostView />
                      <div class="process-comm">
                          <div class="spinner">
                              <div class="bounce1"></div>
                              <div class="bounce2"></div>
                              <div class="bounce3"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 pd-right-none no-pd">
              <div class="right-sidebar">
                  <div class="widget widget-about">
                      <img src="../public/Assets/images/wd-logo.png" alt=""/>
                      <h3>Track Time on Workwise</h3>
                      <span>Pay only for the Hours worked</span>
                      <div class="sign_link">
                          <h3><a href="#" title="">Sign up</a></h3>
                          <a href="#" title="">Learn More</a>
                      </div>
                  </div>
                  <div class="widget widget-jobs">
                      <div class="sd-title">
                          <h3>Top Jobs</h3>
                          <i class="la la-ellipsis-v"></i>
                      </div>
                      <div class="jobs-list">
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior Product Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior UI / UX Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Junior Seo Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior PHP Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior Developer Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="widget widget-jobs">
                      <div class="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i class="la la-ellipsis-v"></i>
                      </div>
                      <div class="jobs-list">
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior Product Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Senior UI / UX Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                          <div class="job-info">
                              <div class="job-details">
                                  <h3>Junior Seo Designer</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                              </div>
                              <div class="hr-rate">
                                  <span>$25/hr</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="widget suggestions full-width">
                      <div class="sd-title">
                          <h3>Most Viewed People</h3>
                          <i class="la la-ellipsis-v"></i>
                      </div>
                      <div class="suggestions-list">
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Poonam</h4>
                                  <span>Wordpress Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Bill Gates</h4>
                                  <span>C &amp; C++ Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>Jessica William</h4>
                                  <span>Graphic Designer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="suggestion-usd">
                              <img src="http://via.placeholder.com/35x35" alt=""/>
                              <div class="sgt-text">
                                  <h4>John Doe</h4>
                                  <span>PHP Developer</span>
                              </div>
                              <span><i class="la la-plus"></i></span>
                          </div>
                          <div class="view-more">
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





<div class="post-popup job_post">
<div class="post-project">
<h3>Post</h3>
<div class="post-project-fields">
  <form>
      <div class="row">

          <div class="col-lg-12">
              <textarea name="description" placeholder="Description"></textarea>
          </div>
          <div class="col-lg-12">
              <ul>
                  <li><button class="active" type="submit" value="post">Post</button></li>
                
              </ul>
          </div>
      </div>
  </form>
</div>
<a href="#" title=""><i class="la la-times-circle-o"></i></a>
</div>
</div>

</div>
 
           
            );
    }


export default Body;