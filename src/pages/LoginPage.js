import React from "react";

function LoginPage() {
	var loginbtn = React.createRef();
	var loginemail = React.createRef();
	var loginpassword = React.createRef();
	var servermsg = React.createRef();

	function login() {
		if(loginemail.current.value != "" && loginpassword.current.value != "") {
			servermsg.current.innerHTML ="";
			loginbtn.current.innerHTML = "loading <i class=\"fa fa-spinner fa-spin\"></i>";
			loginbtn.current.disabled = true;
			console.log( "you clicked in login" );
			let url = 'http://localhost:8080/ChatWeb-1/User/login';
			// Les données du POST
			let data = {
				email: loginemail.current.value,
				psd: loginpassword.current.value
			};
			// Les options de la requete
			let options = {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new URLSearchParams(data)
			};

			fetch(url, options)
				.then(function(response) { return response.json(); })
				.then(function(json) {
					let code = json.msg;
					if(code==0){
						localStorage.setItem("logintoken",json.token);
						alert(json.token)
						window.location.reload();
					}else if(code==1)
						servermsg.current.innerHTML = "<small style=\"color:red\">Ce email n'existe p</small>";
					else if(code==2)
						servermsg.current.innerHTML = "<small style=\"color:orangered\">Mot de passe invalide</small>";
					loginbtn.current.innerHTML = "Login";
					loginbtn.current.disabled = false;
				});
		}else
			servermsg.current.innerHTML ="<small style=\"color:orangered\">Veuillez remplir tous les champs</small>";
	}



	return (
            <div className="sign-in">
              	<div className="wrapper">
					<div className="sign-in-page">
						<div className="signin-popup">
							<div className="signin-pop">
								<div className="row">
									<div className="col-lg-6">
										<div className="cmp-info">
											<div className="cm-logo">
												<img src="Assets/images/cm-logo.png" alt=""/>
												<p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
											</div>
											<img src="Assets/images/cm-main-img.png" alt=""/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="login-sec">
											<ul className="sign-control">
												<li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>
												<li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
											</ul>
											<div className="sign_in_sec current" id="tab-1">

												<h3>Sign in</h3>
												<form>
													<div className="row">
														<div className="col-lg-12 no-pdd">
															<div className="sn-field">
																<input type="text" ref={loginemail} placeholder="email"/>
																<i className="la la-user"></i>
															</div>
														</div>
														<div className="col-lg-12 no-pdd">
															<div className="sn-field">
																<input type="password" ref={loginpassword} placeholder="Password"/>
																<i className="la la-lock"></i>
															</div>
														</div>
														<div className="col-lg-12 no-pdd">
															<div className="checky-sec">
																<strong ref={servermsg} className="fgt-sec">

																</strong>
															</div>
														</div>
														<div className="col-lg-12 no-pdd">
															<button type="button" onClick={login} ref={loginbtn} value="submit">Sign in</button>
														</div>
													</div>
												</form>

											</div>
											<div className="sign_in_sec" id="tab-2">
												<div className="dff-tab current" id="tab-3">
													<form>
														<div className="row">
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="text" name="FirstName" placeholder="First Name"/>
																	<i className="la la-user"></i>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="text" name="LastName" placeholder="Last Name"/>
																	<i className="la la-user"></i>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="text" name="UserName" placeholder="UserName"/>
																	<i className="la la-user"></i>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="date"/>
																
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<select>
																	   <option value="">Gender</option>
																		<option>Man</option>
																		<option>Woman</option>
																		<option>Other</option>
																	</select>
																	<i className="la la-question-circle"></i>
																	<span><i className="fa fa-ellipsis-h"></i></span>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="password" name="password" placeholder="Password"/>
																	<i className="la la-lock"></i>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="sn-field">
																	<input type="password" name="repeat-password" placeholder="Repeat Password"/>
																	<i className="la la-lock"></i>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<div className="checky-sec st2">
																	<div className="fgt-sec">
																		<input type="checkbox" name="cc" id="c2"/>
																		<label htmlFor="c2">
																			<span></span>
																		</label>
																		<small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
																	</div>
																</div>
															</div>
															<div className="col-lg-12 no-pdd">
																<button type="button" value="submit">Get Started</button>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footy-sec">
							<div className="container">
								<ul>
									<li><a href="#" title="">Help Center</a></li>
									<li><a href="#" title="">Privacy Policy</a></li>
									<li><a href="#" title="">Community Guidelines</a></li>
									<li><a href="#" title="">Cookies Policy</a></li>
									<li><a href="#" title="">Career</a></li>
									<li><a href="#" title="">Forum</a></li>
									<li><a href="#" title="">Language</a></li>
									<li><a href="#" title="">Copyright Policy</a></li>
								</ul>
								<p><img src="Assets/images/copy-icon.png" alt=""/>Copyright 2018</p>
							</div>
						</div>
					</div>
				</div>
 			</div>
		  );
    }


export default LoginPage;