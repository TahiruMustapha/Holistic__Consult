import React from 'react'
import './About.css'
import img1 from './about-img/img1.jpeg'
import img2 from './about-img/img2.jpeg'
import img3 from './about-img/img3.jpeg'
import img4 from './about-img/img4.jpeg'
import img5 from './about-img/img5.jpeg'
import img6 from './about-img/img6.jpeg'
import img7 from './about-img/img7.jpeg'
import img8 from './about-img/img8.jpeg'
import img9 from './about-img/img9.jpeg'
import img10 from './about-img/img10.jpeg'
import Meeting from '../Meeting/Meeting'
const About = ({aboutBtn}) => {
  return (
    <div className='about'>
       <div className='about-bg'>
        <h3>   About Us</h3>
     <p>Know more about holistic</p>
       </div>
       <div className="about-text-info">
       <div className='about-info'>
           <div className='about-details'>
            <h3>About Us</h3>
            <p>
            Holistic Counselling“and” Training Consult Ltd is a
             limited liability company that specializes in training
              and developing relevant skills and knowledge in the
             practice of Care, Coaching and Counselling in the 
             church and beyond. It’s personnel and vast kill 
             development courses are accredited by the Ghana 
             Psychology Council 
            </p>
           </div>
           <div className='speech-img'>
            <img src={img1} alt='speech'/>
            <div className='degrees'>
            <p >JAMES KOFI ABBREY <br />
                -M.A, M.TH, M.H.C.F.R, D.D(HON),PHD STUDENT <br />
                Founder and Executive Director
            </p>
            </div>
           </div>
       </div>
       <div className='different'>
           <img src={img2} alt='group_pic'/>
           <div className='different-details'>
              <h2>What Makes Us Different</h2>
              <p>Since its inception, Holistic Counselling
             and Training Consult has provided comprehensive
             and contextualized support services to both the young 
             and old with the goal of improving their physical, emotional,
              socio-economic, spiritual and educational well-being. 
              This has been accomplished under the able leadership of renowned, 
              experienced and certified counsellor and a team of competent 
              individuals with rich experiences in related fields of study.</p>
           </div>
       </div>
       </div>
     
       <div className='ui-ux'>
            <img src={img3} alt='banner'/>
            <img src={img4} alt='banner'/>
       </div>
       <div className='gallery'>
        <p>Gallery</p>
             <div className='gallery1'>
             <img src={img5} alt='banner'/>
             </div>
             <div className='gallery2'>
              <div>
              <img src={img6} alt='banner'/>
              </div>
              <div>
              <img src={img7} alt='banner'/>
              </div>
              <div>
              <img src={img8} alt='banner'/>
              </div>
             
             {/* <img src={img7} alt='banner'/>
             <img src={img8} alt='banner'/> */}
             </div>
             <div  className='gallery3'>
             <img src={img9} alt='banner'/>
             <img src={img10} alt='banner'/>
             </div>
       </div>
       <Meeting book={aboutBtn}/>
    </div>
  )
}

export default About
