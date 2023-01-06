import React from 'react';
import '../assets/css/proservices.css'
import appointment from '../assets/images/appointment.png'
import arrowimg from '../assets/images/group-314.png'
import rigthsign from '../assets/images/vector-right.png'
import rightsignBrown from '../assets/images/vector-right-brown.png'

const ProServicesContainer = () => {
  return (
    <section className='prov-services_conatiner'>
      <div Class="container mainContainer">
        <div Class="row innerContainer">
            <div Class="col-sm-12 left-Container">
              <div className='pro-services'>PRO Services</div>
              <div className='appointment'>Make an appointment with <strong>Advocates and Legal</strong> <br/>consultancy, Today! </div>
                <div className='appointment-text'>
                  <div className='appointment-text-final'>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rigthsign} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div> 
                          </div>

                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rigthsign} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div>
                          </div>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rigthsign} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div>
                          </div>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rigthsign} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.                                                           
                            </div>
                          </div>

                  </div>
                 
                  <div className='arrow-img'>
                    <img src={arrowimg} alt="appointment" />
                  </div>
              </div>
            </div>

            <div Class="col-sm-12 right-Container">
            <div className='legal-header'>Legal Translation <br/> Services</div>
              <div className='appointment'><strong>Make an appointment</strong> with Advocates and <br/> Legal consultancy, Today! </div>
                <div className='appointment-text'>
                <div className='appointment-text-final'>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rightsignBrown} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div> 
                          </div>

                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rightsignBrown} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div>
                          </div>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rightsignBrown} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.
                            </div>
                          </div>
                          <div className='appointment-sign-text'>
                            <div className='right-sign'>
                              <img src={rightsignBrown} alt="right" />
                            </div>
                            <div className='appointment-grp'>
                              Make an appointment with Advocates.                                                           
                            </div>
                          </div>

                  </div>
                  <div className='arrow-img'>
                  <img src={arrowimg} alt="appointment" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProServicesContainer;
