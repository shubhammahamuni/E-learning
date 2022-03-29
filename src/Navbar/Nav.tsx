/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import serchicon from "../images/icon/search.png"
import playicon from "../images/icon/play.png"
import svg1 from "../images/extra/svg1.jpg"
import logo from "../images/icon/logo.png"


export default function NavBar() {
   
     
  return (	<header id="header">
  <nav>
      <div className="logo"><img src={logo} alt="logo"/></div>
      <ul>
          <li><a className="active" href="">Home</a></li>
          <li><a href="#portfolio_section">Portfolio</a></li>
          <li><a href="#team_section">Team</a></li>
          <li><a href="#services_section">Services</a></li>
          <li><a href="#contactus_section">Contact</a></li>
      </ul>
      <div className="srch"><input type="text" className="search" placeholder="Search here..."/><img src={serchicon} alt="search"/></div>
      <a className="get-started" href="login.html">Get Started</a>
      <img src="images/icon/menu.png" className="menu"  alt="menu"/>
  </nav>
  <div className="head-container">
      <div className="quote">
          <p>The beautiful thing about learning is that nobody can take it away from you</p>
          <h5>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</h5>
          <div className="play">
              <img src={playicon} alt="play"/><span><a href="https://www.youtube.com/watch?v=KFyrgDO1WXk" target="_blank">Watch Now</a></span>
          </div>
      </div>
      <div className="svg-image">
          <img src={svg1} alt="svg"/>
      </div>
  </div>
  <div className="side-menu" id="side-menu">
      <div className="close"><img src="images/icon/close.png" alt=""/></div>
      <div className="user">
          <img src="images/creator/roshan.jpeg" alt="Username"/>
          <p>roshank9419</p>
      </div>
      <ul>
          <li><a href="#about_section">About</a></li>
          <li><a href="#portfolio_section">Portfolio</a></li>
          <li><a href="#team_section">Team</a></li>
          <li><a href="#services_section">Services</a></li>
          <li><a href="#contactus_section">Contact</a></li>
          <li><a href="#feedBACK">Feedback</a></li>
      </ul>
  </div>
</header>
  )
}
