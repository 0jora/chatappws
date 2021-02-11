import React from "react";
import {Link} from "react-router-dom";

function Comments() {
          return (

<div class="comment-section">
 

    <div class="comment-sec">
        <ul>
            <li>
                <div class="comment-list">
                    <div class="bg-img">
                        <img src="http://via.placeholder.com/40x40" alt=""/>
                    </div>
                    <div class="comment">
                        <h3>John Doe</h3>
                        <span><img src="Assets/images/clock.png" alt=""/> 3 min ago</span>
                        <p>Lorem ipsum dolor sit amet, </p>
                        <a href="#" title="" class="active"><i class="fa fa-reply-all"></i>Reply</a>
                    </div>
                </div>
                <ul>
                    <li>
                        <div class="comment-list">
                            <div class="bg-img">
                                <img src="http://via.placeholder.com/40x40" alt=""/>
                            </div>
                            <div class="comment">
                                <h3>John Doe</h3>
                                <span><img src="Assets/images/clock.png" alt=""/> 3 min ago</span>
                                <p>Hi John </p>
                                <a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <div class="comment-list">
                    <div class="bg-img">
                        <img src="http://via.placeholder.com/40x40" alt=""/>
                    </div>
                    <div class="comment">
                        <h3>John Doe</h3>
                        <span><img src="Assets/images/clock.png" alt=""/> 3 min ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                        <a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="post-comment">
      
        <div class="comment_box">
            <form>
                <input type="text" placeholder="Post a comment"/>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
</div>

          )
}

export default Comments; 