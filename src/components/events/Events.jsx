import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div className='events'>
         <h1>Upcoming Events</h1>
         <div className='eventsDetails'>
            <div>
               <p className='day'>STUDY</p>
               <p className='date'>JAN,  <span>2023 </span>(6 months)</p>
               <p className='modules-text'>Apply to lay practitioner certificate in pastoral counselling today!</p>
               <p className='modules'>4 modules in 6months.</p>
               <Link to='/apply'><button className='events-btn'>Apply</button></Link>
            </div>
            <div>
            <p className='day'>STUDY</p>
            <p className='date'>JAN,  <span>2023 </span>(6 months)</p>
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