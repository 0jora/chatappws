import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Comments from "./Comments";
function PostView(props) {
    const [date , setNews] = useState();

    useEffect(() => {
        let diff =Math.abs(new Date().getTime() - props.date ) / 1000;

        var findate = "il y'a ";

        let days = Math.floor(diff / 86400);
        if(days!=0)
            findate += days+" jour ";

        let hours = Math.floor(diff / 3600) % 24;
        if(hours!=0)
            findate += hours+" heures ";

        let minutes = Math.floor(diff / 60) % 60;
        if(minutes!=0)
            findate += minutes+" minute ";

        let sec = Math.floor(diff  % 60);
        if(sec!=0)
            findate += sec+" sec ";


        setNews(findate)
    },[]);



          return (
              
<div className="posty">
<div className="post-bar no-margin">
    <div className="post_topbar">
        <div className="usy-dt">
            <img src="http://via.placeholder.com/50x50" alt=""/>
            <div className="usy-name">
                <h3>{props.poster}</h3>
                <span><img src="../public/Assets/images/clock.png" alt=""/>{ date }</span>
            </div>
        </div>
    </div>
    <div className="epi-sec">
        
        
    </div>
    <div className="job_descp">
       
        <p>{props.text}</p>
     
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
    </div>
</div>
    <Comments comments={props.comments} />
</div>
          )
}


export default PostView;
