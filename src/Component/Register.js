import React from 'react';
import '../assets/css/register.css'
import img1 from '../assets/images/Ellipse1.png'
import img2 from '../assets/images/Ellipse2.png'
import img3 from '../assets/images/Ellipse3.png'
import img4 from '../assets/images/Vector -img.png'


const ProServicesContainer = () => {
  return (
    <section className='prov-services_conatiner'>
      <div Class="container mainContainer">
        <div Class="row innerContainer">
          <div Class="col-sm-12 left-Container">
            <div className='why-formate'>
              <h1 className='why-heading'>Why Register?</h1>
              <p className='why-subheading'>Keep the history of all your chats, questions and callback
                requests. Adding a lorem ipsum here.</p>
              <img className='register-logo-data3' src={img4} />
            </div>
          </div>
          <div Class="col-sm-12 right-Container">
            <div className='img-container'>
              <img className='register-logo-data' src={img1} />
              <span className='why-subheading'>Keep the history of all your chats, questions and callback requests</span>
              <br />
              <img className='register-logo-data2' src={img2} />
              <span className='why-subheading'>Track your interactions with lawyers and receive notifications</span>
              <br />
              <img className='register-logo-data3' src={img3} />
              <span className='why-subheading'>Ask lawyers follow-up questions if something is not clear from their answers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProServicesContainer;
