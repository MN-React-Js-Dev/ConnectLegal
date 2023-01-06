import React from 'react'
import '../assets/css/proservices.css'
import appointment from '../assets/images/appointment.png'
import arrowimg from '../assets/images/group-314.png'
import rigthsign from '../assets/images/vector-right.png'
import rightsignBrown from '../assets/images/vector-right-brown.png'

function register() {
  return (
    <>
     <section className='prov-services_conatiner'>
      <div Class="container mainContainer">
        <div Class="row innerContainer">
          <div Class="col-sm-12 left-Container">
            <h1>Why Register?</h1>
            <p>Keep the history of all your chats, questions and callback requests. Adding a lorem ipsum here.</p>
          </div>


          <div Class="col-sm-12 right-Container">
            <div className='legal-header'>Legal Translation <br /> Services</div>
            <div className='appointment'><strong>Make an appointment</strong> with Advocates and <br /> Legal consultancy, Today! </div>
            <div className='appointment-text'>
              <div className='right-sign'>
                <img src={rightsignBrown} alt="right" />
                <img src={rightsignBrown} alt="right" />
                <img src={rightsignBrown} alt="right" />
                <img src={rightsignBrown} alt="right" />
              </div>
              <div className='appointment-grp'>
                <img src={appointment} alt="appointment" />
              </div>
              <div className='arrow-img'>
                <img src={arrowimg} alt="appointment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default register