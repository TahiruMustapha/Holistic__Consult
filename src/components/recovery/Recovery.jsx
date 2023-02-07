import React from 'react'
import './Recovery.css'
import paperWork from './recovery-img/paperWork.jpg'
import discussingWork from './recovery-img/discussingWork.jpg'
const Recovery = () => {
  return (
    <div className='main-recovery'>
      <div className="recovery">
      <h3 className='recovery-h3'>Recovery Process</h3>
      <p className='how_p'>How it works</p>
      <div  className='recovery-info'>
        <div className='recovery-details'>
            <i>Step 1</i>
            <h3 >Book an  Appointment</h3>
            <p>Call the providered number to make further enquires
               of your choice and book an appointment to fit your 
               schedule.    
            </p>
        </div>
          <img src={paperWork} alt="paperwork" />
      </div>
      <div className='recovery-info'  id = 'recovery-info2 '>
        <div className='recovery-details'>
            <i>Step 2</i>
            <h3 >Let's Find Best <br/>Slolution For You</h3>
            <p>Register to complete the booking process and
               fill and intake assessment form. You can now
                schedule your meeting with a professional 
                counsellor.
            </p>
        </div>
          <img src={discussingWork} alt="paperwork" />
      </div>
      </div>
    </div>
  )
}

export default Recovery
