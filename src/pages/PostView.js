import React from "react";
import {Link} from "react-router-dom";
import Comments from "./Comments";
function PostView() {
          return (
              
<div class="posty">
<div class="post-bar no-margin">
    <div class="post_topbar">
        <div class="usy-dt">
            <img src="http://via.placeholder.com/50x50" alt=""/>
            <div class="usy-name">
                <h3>John Doe</h3>
                <span><img src="../public/Assets/images/clock.png" alt=""/>3 min ago</span>
            </div>
        </div>
        <div class="ed-opts">
           
            <ul class="bk-links">
               <li><a href="#" title=""><i class="la la-plus-circle"></i></a></li>
               
            </ul>
        </div>
    </div>
    <div class="epi-sec">
        
        
    </div>
    <div class="job_descp">
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        </p>
     
    </div>
    <div class="job-status-bar">
        <ul class="like-com">
            <li>
                <a href="#"><i class="la la-heart"></i> Like</a>
                <img src="Assets/images/liked-img.png" alt=""/>
                <span>25</span>
            </li> 
            <li><a href="#" title="" class="com"><img src="Assets/images/com.png" alt=""/> Comment 15</a></li>
        </ul>
        <a><i class="la la-eye"></i>Views 50</a>
    </div>
</div>
<Comments />
</div>
          )
}


export default PostView;
