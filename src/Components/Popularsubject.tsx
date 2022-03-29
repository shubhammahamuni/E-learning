import React from 'react'
import book from "../images/courses/book.png";
import d1 from "../images/courses/d1.png";
import paper from "../images/courses/paper.png";
import computer from "../images/courses/computer.png";
import data from "../images/courses/data.png";
import algo from "../images/courses/algo.png";
import projects from "../images/courses/projects.png";

export  function Popularsubject() {
  return (
      <>
    <div className="title">
		<span>Popular Subjects on LearnEd</span>
	</div>
	<br/><br/>
	<div className="course">
		<div className="cbox">
		<div className="det"><a href="subjects/jee.html"><img src={book}/>JEE Preparation</a></div>
		<div className="det"><a href="subjects/gate.html"><img src={d1}/>GATE Preparation</a></div>
		<div className="det"><a href="subjects/jee.html#sample_papers"><img src={paper}/>Sample Papers</a></div>
		<div className="det"><a href="subjects/quiz.html"><img src={d1}/>Daily Quiz</a></div>
		</div>
		<div className="cbox">
		<div className="det"><a href="subjects/computer_courses.html"><img src={computer}/>Computer Courses</a></div>
		<div className="det"><a href="subjects/computer_courses.html#data"><img src={data}/>Data Structures</a></div>
		<div className="det"><a href="subjects/computer_courses.html#algo"><img src={algo}/>Algorithm</a></div>
		<div className="det det-last"><a href="subjects/computer_courses.html#projects"><img src={projects}/>Projects</a></div>
		</div>
	</div>
    </>
  )
}
