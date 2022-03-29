import React from 'react'
import e3 from "../images/extra/e3.jpg"

export  function Aboutus() {
  return (
 <div className="diffSection" id="about_section">
		<p style={{fontSize:"50px" , padding:"100px"}} >About</p>
		<div className="about-content">
				<div className="side-image">
					<img className="sideImage" src={e3}/>
				</div>
				<div className="side-text">
					<h2>What you think about us ?</h2>
					<p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.<br/> Educational website can include websites that have games, videos or topic related resources that act as tools to enhance learning and supplement classroom teaching. These websites help make the process of learning entertaining and attractive to the student, especially in today's age. <br/>Using HTML(HyperText Markup Language), CSS(Cascading Style Sheet), JavaScript, we can make learning more easier and in a interesting way.</p>
				</div>
		</div>
	</div>
    
  )
}
