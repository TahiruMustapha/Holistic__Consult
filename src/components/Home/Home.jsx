
import Aim from '../Aim/Aim'
import Events from '../events/Events'
import Recovery from '../recovery/Recovery'
import Services from '../Services/Services'
//import Work from '../Work/Work'
import './Home.css'

const Home = ({homeBtn,onClose}) => {

  return (
    <div className='main-home-content'>
      <div  className='main-home' >
      <h1>Therapy for <br/> Depression</h1>
      <p>We develop & understand your <br/> thought patterns</p>
      <button id='home-btn' className='home-btn' onClick={homeBtn} >Book An Appointment</button>

    </div>
    <Aim/>
    <Services/>
    <Recovery/>
    {/* <Work/> */}
    <Events/>
    </div>
    

  )
}

export default Home
