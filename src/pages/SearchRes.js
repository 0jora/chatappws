import React from "react";
import {Link} from "react-router-dom";
let follofref = React.createRef();


function SearchRes(props) {
    console.log(props)


    function fnfollow() {
        let data = {
            token: localStorage.getItem("logintoken"),
            following: props.email
        };
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(data)
        };
        if(follofref.current.text == "Unfollow") {
            follofref.current.innerHTML = 'loading <i class="fa fa-spinner fa-spin"></i>';
            let url = 'http://localhost:8080/ChatWeb-1/User/unfollow';
            fetch(url, options).then(function () {
                follofref.current.text = "Follow";
            });
        }else if(follofref.current.innerHTML == "Follow") {
            follofref.current.innerHTML = 'loading <i class="fa fa-spinner fa-spin"></i>';
            let url = 'http://localhost:8080/ChatWeb-1/User/follow';
            fetch(url, options).then(function () {
                follofref.current.text = "Unfollow";
            });
        }
    }



    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="company_profile_info">
                                <div className="company-up-info">
                                    <img src="http://via.placeholder.com/91x91" alt=""/>
                                    <h3>{props.username}</h3>
                                    <h4>{props.nom} {props.prenom}</h4>
                                    <ul>
                                        <li><Link to='#' onClick={fnfollow} ref={follofref} title="" className="follow">{props.follow?"Unfollow":"Follow"}</Link></li>
                                    </ul>
                                </div>
                                <a href="#" title="" className="view-more-pro">View Profile</a>
                            </div>
                        </div>
    )
}


export default SearchRes;