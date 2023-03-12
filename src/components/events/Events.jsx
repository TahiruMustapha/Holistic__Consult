import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div className='events'>
         <h1>Upcoming Events</h1>
         <div className='eventsDetails'>
            <div>
               <p className='day'>Weekday <br /> Mon-Thur</p>
               <p className="day-time">9:00am - 2:00pm</p>
               <p className='date'>APRIL,  <span>2023 </span> <br /> (4 months)</p>
               <p className='modules-text'>Apply to lay practitioner certificate in pastoral counselling today!</p>
               <p className='modules'>4 modules in 4months.</p>
               <Link to='/apply'><button className='events-btn'>Apply</button></Link>
            </div>
            <div>
            <p className='day'>Weekday <br /> Mon-Thur</p>
               <p className="day-time">9:00am - 2:00pm</p>
            <p className='date'>APRIL,  <span>2023 </span> <br /> (4 months)</p>
            <p className='modules-text'>Apply to moral injury dimension and their treatment modules today!</p>
            <p className='modules'>2 Day practical workshop.</p>
            <Link to='/apply'><button className='events-btn'>Apply</button></Link>

            </div>
         </div>
         <hr />
    </div>
  )
}

export default Events