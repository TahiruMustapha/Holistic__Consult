import React from 'react'
import './Work.css'
import { FaScroll } from "react-icons/fa";
import paperWork from '../Work/Work-img/paperWork.jpg'
import discussingWork from '../Work/Work-img/discussingWork.jpg'
const Work = () => {
  return (
    <div className='work'>
        <div className='work-text'>
            <h2>How It Works?</h2>
            <FaScroll style={{fontSize:'30px', marginLeft:'15px', color:'black'}}/>
        </div>
        <div className='work-details'>
            <div className='work-details1'>
                <div>
                    <i>Step 1</i>
                    <h3>Schedule An <br/> Appointment</h3>
                    <p>Call the provider number to make further enquires
                        of your choice and book an appointment to fit your 
                        schedule.    
                    </p>
                </div>
                <img src={paperWork} alt='paper work'/>

            </div>
            <div className='work-details2'>
            <div>
                    <i>Step 2</i>
                    <h3>Let's Find Best <br/>Solution For You</h3>
                    <p>Register and the filling of intake assesment.
                        You can now schedule your meeting with 
                        professional counsellor.
                    .</p>
                </div>
                <img src={discussingWork} alt='paper work'/>
            </div>
        </div>
    </div>
  )
}

export default Work