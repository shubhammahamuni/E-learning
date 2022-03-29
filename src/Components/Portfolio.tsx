import React from 'react'

export  function Portfolio() {
  return (
      <>
    <div className="diffSection" id="portfolio_section">
   <p style={{fontSize:"50px" , padding:"100px" , paddingBottom:"40px"}}>Portfolio</p>
    <div className="content">
        <p>
            “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”
        </p>
    </div>
</div>
<div className="extra">
    <p>We're increasing this data every year</p>
    <div className="smbox">
    <span><div className="data">154</div><div className="det">Enrolled Students</div></span>
    <span><div className="data">62</div><div className="det">Total Courses</div></span>
    <span><div className="data">56</div><div className="det">Placed Students</div></span>
    <span><div className="data">27</div><div className="det">Total Projects</div></span>
    </div>
</div>
</>
  )
}
