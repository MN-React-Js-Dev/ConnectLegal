import React from "react";
import './home.css';
import process from '../../assets/images/PROCESS.png';
import content from '../../assets/images/3 STEPS FOR Appointment Process for Legal Services.png';
import img1 from '../../assets/images/Rectangle 95.png';
import img2 from '../../assets/images/Rectangle 69.png';
import img3 from '../../assets/images/Rectangle 70.png';
import no1 from '../../assets/images/1.png';
import no2 from '../../assets/images/2.png';
import no3 from '../../assets/images/3.png';
import frame from '../../assets/images/Frame.png';
import frame1 from '../../assets/images/Vectoradfasd.png';
import frame2 from '../../assets/images/Group 196.png';
import text from '../../assets/images/Search Best Lawyer for Online Consultation.png';
import text1 from '../../assets/images/View Lawyer profile.png';
import text2 from '../../assets/images/Get Instant Lawyer Appointment.png'
import Rectangle from '../../assets/images/Rectangle 127.png';
import Rectangle1 from '../../assets/images/Rectangle 128.png';
import Rectangle2 from '../../assets/images/Rectangle 129.png';
import seeMore from '../../assets/images/See more _.png';
import seeMore1 from '../../assets/images/See more _ (1).png';
import seeMore2 from '../../assets/images/See more _ (2).png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <>
         <section class="discounts-section">
      <div class="container"> 
        <div class="row align-items-center justify-content-between">
          <div class="row align-items-center justify-content-between">
            <div>
                  <b><h2>3 STEPS FOR </h2>
                   <h2> Appointment Process for <br/>
                    Legal Services</h2></b>
            </div>
            <div id="mainContentRight1" class="col-md-3">
            <h1 className="card1-number">1</h1>
            <img src={frame} alt='img' className="frame" />
            <h3 > <b>Search Best Lawyer for <br/>Online Consultation</b></h3>
            <button>See more </button>
            </div>
            <div id="mainContentRight2" class="col-md-3"> 
            <h1 className="card2-number">2</h1>
            <img src={frame1} alt='img' className="frame-1" />
             <h3><b>View Lawyer profile</b></h3>
             <button>See more </button>
            </div>
            <div id="mainContentRight3" class="col-md-3">
            <h1 className="card3-number">3</h1>
            <img src={frame2} alt='img' className="frame-2" />
            <h3><b>Get Instant Lawyer <br/>Appointment</b></h3>
            <br/>
            <button>See more </button>
            <br/>
            </div>
          </div>
        </div>
         </div> 
      </section>
    
            {/* <section className="three_steps">
                <div className="cstm3_div">
                <div className="main-content">
                    <img src={process} alt="img" />
                    <img className="content" src={content}  alt="img" />
                </div>
                <div className="rectengle-box">
                    <img className='box-img' src={img1}  alt="img" />
                    <div>
                        <img className="number-image" src={no1}  alt="img" />
                    </div>
                    <div className="frame-image">
                        <img src={frame}  alt='img' />
                    </div>
                    <div className="text">
                        <img src={text}
                            alt='text-img'
                        />
                    </div>
                    <div className="tangle">
                        <img src={Rectangle} />
                        <img className="text2" src={seeMore} />
                    </div>
                </div>

                <div className="rectengle-box2">
                    <img className='box-img2' src={img2}
                        alt="img"
                    />
                    <div>
                        <img className="number-image1" src={no2}
                            alt="img"
                        />
                    </div>
                    <div className="frame-image">
                        <img src={frame1}
                            alt='img'
                        />
                        <div className="text-view">
                            <img src={text1}
                                alt='text-img'
                            />
                        </div>
                    </div>
                    <div className="tangle1">
                        <img src={Rectangle1} />
                        <img className="text2" src={seeMore1} />
                    </div>
                </div>

                <div className="rectengle-box3">
                    <img className='box-img2' src={img3}
                        alt="img"
                    />
                    <div>
                        <img className="number-image1" src={no3}
                            alt="img"
                        />
                    </div>
                    <div className="frame-image">
                        <img src={frame2}
                            alt='img'
                        />
                        <div className="text-view">
                            <img src={text2}
                                alt='text-img'
                            />
                        </div>
                    </div>
                    <div className="tangle2">
                        <img src={Rectangle2} />
                        <img className="text2" src={seeMore2} />
                    </div>
                </div>
                </div>
            </section>  */}
        </>
    )
}

export default Home;