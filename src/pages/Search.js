import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import SearchRes from "./SearchRes";

let spinner = React.createRef();
function Search({match}) {


        useEffect(() => {
            fetchResearch()
        },[]);

        const [resoluts , setresoluts] = useState([]);

        //loadsearch(match.params.id)
        const fetchResearch = () => {
            let url = 'http://localhost:8080/ChatWeb-1/User/Search';
            // Les données du POST
            let data = {
                token: localStorage.getItem("logintoken"),
                keyword: match.params.id
            };
            // Les options de la requete
            let options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(data)
            };
            fetch(url, options).then(function(response) { return response.json(); })
                .then(function(res) {
                    spinner.current.innerHTML = '';
                    let code = res.msg;
                    if(code==0){
                        setresoluts(res.result);
                    }else if(code==1)
                        console.log("no userfounded")
                });
        }
    return (
        <section className="companies-info">
            <div className="container">
                <div className="company-title">
                    <h3>All Companies</h3>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {resoluts.map(item =>
                            <SearchRes key={item.email} follow={item.follow} email={item.email} nom={item.nom} prenom={item.prenom} username={item.username} ></SearchRes>
                        )}
                    </div>
                </div>
                <div className="process-comm" ref={spinner}>
                    <div className="spinner">
                        <div className="bounce1"/>
                        <div className="bounce2"/>
                        <div className="bounce3"/>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Search;