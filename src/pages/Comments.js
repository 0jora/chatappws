import React from "react";


function Comments(props) {
          return (
<div className="comment-section">
    <div className="comment-sec">
        <ul>
            {props.comments.map(item =>
                <li>
                    <div className="comment-list">
                        <div className="bg-img">
                            <img src="http://via.placeholder.com/40x40" alt=""/>
                        </div>
                        <div className="comment">
                            <h3>{item.writer}</h3>
                            <p>{item.text}</p>

                        </div>
                    </div>
                </li>
            )}
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