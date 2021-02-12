import React from "react";
import {Link} from "react-router-dom";

function Comments() {
          return (

<div className="comment-section">
 

    <div className="comment-sec">
        <ul>
            <li>
                <div className="comment-list">
                    <div className="bg-img">
                        <img src="http://via.placeholder.com/40x40" alt=""/>
                    </div>
                    <div className="comment">
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet, </p>

                    </div>
                </div>
            </li>
            <li>
                <div className="comment-list">
                    <div className="bg-img">
                        <img src="http://via.placeholder.com/40x40" alt=""/>
                    </div>
                    <div className="comment">
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div className="post-comment">
      
        <div className="comment_box">
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