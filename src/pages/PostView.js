import React from "react";
import {Link} from "react-router-dom";
import Comments from "./Comments";
function PostView() {
          return (
              
<div className="posty">
<div className="post-bar no-margin">
    <div className="post_topbar">
        <div className="usy-dt">
            <img src="http://via.placeholder.com/50x50" alt=""/>
            <div className="usy-name">
                <h3>John Doe</h3>
                <span><img src="../public/Assets/images/clock.png" alt=""/>3 min ago</span>
            </div>
        </div>
        <div className="ed-opts">
           
            <ul className="bk-links">
               <li><a href="#" title=""><i className="la la-plus-circle"></i></a></li>
               
            </ul>
        </div>
    </div>
    <div className="epi-sec">
        
        
    </div>
    <div className="job_descp">
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet
        </p>
     
    </div>
    <div className="job-status-bar">
        <ul className="like-com">
            <li>
                <a href="#"><i className="la la-heart"></i> Like</a>
                <img src="Assets/images/liked-img.png" alt=""/>
                <span>25</span>
            </li> 
            <li><a href="#" title="" className="com"><img src="Assets/images/com.png" alt=""/> Comment 15</a></li>
        </ul>
        <a><i className="la la-eye"></i>Views 50</a>
    </div>
</div>
<Comments />
</div>
          )
}


export default PostView;
