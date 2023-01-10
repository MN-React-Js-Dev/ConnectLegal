import React from "react";
import './home.css';
import frame from '../../assets/images/Frame.png';
import frame1 from '../../assets/images/Vectoradfasd.png';
import frame2 from '../../assets/images/Group 196.png';

const Home = () => {
    return (
        <>
         <section class="discounts-section">
      <div class="container"> 
        <div class="threes-container">

        
          <div className="first-card-container">

            <div className="firsts-text-wrapper">
                 <h2 className="text">PROCESS</h2>
                  <b><h2 className="text1">3 STEPS FOR </h2>
                   <h2 className="text2"> Appointment <span className="text3">Process for <br/>
                    Legal Services</span></h2></b>
            </div>

            <div className="center-of-all">
                <div class="col-md-3 hover-zoom  mainContentRight1">
                    <h1 className="card1-number">1</h1>
                    <img src={frame} alt='img' className="frame" />
                    <h2 className="content">Search Best Lawyer for Online Consultation</h2>
                    <div className="btn1">{`See more >`}</div>
                  </div>
                </div>
          </div>

          <div className="second-card-container">
            <div className="seconds-text-wrapper">
                 <h2 className="text">PROCESS</h2>
                  <b><h2 className="text1">3 STEPS FOR </h2>
                   <h2 className="text2"> Appointment <span className="text3">Process for <br/>
                    Legal Services</span></h2></b>
            </div>

            <div className="center-of-all">
            <div class="col-md-3 hover-zoom  mainContentRight2"> 
                        <h1 className="card2-number">2</h1>
                        <img src={frame1} alt='img' className="frame-1" />
                        <h2 className="content1"><b>View Lawyer profile</b></h2>
                        <div className="btn2">{`See more >`}</div>
                </div>
            </div>
          </div>

          <div className="third-card-container">
          <div class="col-md-3 hover-zoom  mainContentRight3">
              <h1 className="card3-number">3</h1>
              <img src={frame2} alt='img' className="frame-2" />
              <h2 className="content2"><b>Get Instant Lawyer <br/>Appointment</b></h2>
              <div className="btn3">{`See more >`}</div>
            </div>
          </div>

          {/* <div class="row align-items-center justify-content-between">
            <div>
                 <h2 className="text">PROCESS</h2>
                  <b><h2 className="text1">3 STEPS FOR </h2>
                   <h2 className="text2"> Appointment <span className="text3">Process for <br/>
                    Legal Services</span></h2></b>
            </div>
            <div id="mainContentRight1" class="col-md-3 hover-zoom">
              <h1 className="card1-number">1</h1>
              <img src={frame} alt='img' className="frame" />
              <h2 className="content">Search Best Lawyer for Online Consultation</h2>
              <div className="btn1">See more </div>
            </div>


          
                <div id="mainContentRight2" class="col-md-3 hover-zoom"> 
                    <div>
                          <h1 className="card2-number">2</h1>
                        <img src={frame1} alt='img' className="frame-1" />
                        <h2 className="content1"><b>View Lawyer profile</b></h2>
                    <div className="btn2">See more </div>
                </div>
            </div>

            <div id="mainContentRight3" class="col-md-3 hover-zoom">
              <h1 className="card3-number">3</h1>
              <img src={frame2} alt='img' className="frame-2" />
              <h2 className="content2"><b>Get Instant Lawyer <br/>Appointment</b></h2>
              <div className="btn3">See more </div>
            </div>
          </div> */}


        </div>
         </div> 
      </section>
        </>
    )
}

export default Home;