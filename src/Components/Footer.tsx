import React from 'react'
import logoc from "../images/icon/logo - Copy.png"
import fb  from "../images/icon/fb.png"
import tt  from "../images/icon/tt.png"
import yt  from "../images/icon/ytube.png"
import linkedin  from "../images/icon/linkedin.png"
import location from "../images/icon/location.png"
import phone from "../images/icon/phone.png"
import mail from "../images/icon/mail.png"

export  function Footer() {
  return (<footer>
		<div className="footer-container">
			<div className="left-col">
				<img src={logoc} className={"width:200px"} />
				<div className="logo"></div>
				<div className="social-media">
					<a href="#"><img src={fb}/></a>
					<a href="#"><img src={tt}/></a>
					<a href="#"><img src={yt}/></a>
					<a href="#"><img src={linkedin}/></a>
				</div><br/><br/>
				<p className="rights-text">Copyright © 2021 Created By Roshan Kumar, Abhishek Dulat All Rights Reserved.</p>
				<br/><p><img src={location}/> Lovely Professional University<br/>Phagwara, Punjab-144401</p><br/>
				<p><img src={phone}/> +91-1234-567-890<br/><img src={mail}/>&nbsp; learnedonline9419@gmail.com</p>
			</div>
			<div className="right-col">
				<h1>Our Newsletter</h1>
				<div className="border"></div><br/>
				<p>Enter Your Email to get our News and updates.</p>
				<form className="newsletter-form">
					<input className="txtb" type="email" placeholder="Enter Your Email"/>
					<input className="btn" type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</footer>
  )
}
