import React from 'react'

export  function Feedback() {
  return (<>   
       <div className="title2" id="feedBACK">
    <span>Give Feedback</span>
    <div className="shortdesc2">
        <p>Please share your valuable feedback to us</p>
    </div>
</div>

<div className="feedbox">
    <div className="feed">
        <form action="mailto:roshank9419@gmail.com" method="post" >
            <label>Your Name</label><br/>
            <input type="text" name="" className="fname" /><br/>
            <label>Email</label><br/>
            <input type="email" name="mail" /><br/>
            <label>Additional Details</label><br/>
            <textarea name="addtional"></textarea><br/>
            <button type="submit" id="csubmit">Send Message</button>
        </form>
    </div>
</div>
</>

  )
}
