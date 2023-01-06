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
import frame1 from '../../assets/images/Vector (1).png';
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


const Home = () => {
    return (
      <>
            <div className="main-content">
                <img src={process}
                     alt="img"
                />
                <img className="content" src={content}
                    alt="img"
                />
            </div>
            <div className="rectengle-box">
                <img className='box-img'src={img1}
                     alt="img"
                    />
                <div>  
                <img className="number-image" src={no1}
                    alt="img"
                />       
                </div>
                <div className="frame-image">
                <img src={frame}
                    alt='img' 
                />
                </div>
                <div className="text">
                <img src={text}
                    alt='text-img' 
                />
                </div>
                <div className="tangle">
                    <img src={Rectangle}/> 
                    <img className="text2" src={seeMore}/>
                </div>
            </div>

            <div className="rectengle-box2">
                <img className='box-img2'src={img2}
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
                    <img src={Rectangle1}/> 
                    <img className="text2" src={seeMore1}/>
                </div>
            </div>

            <div className="rectengle-box3">
                <img className='box-img2'src={img3}
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
                    <img src={Rectangle2}/> 
                    <img className="text2" src={seeMore2}/>
                </div>
            </div>
        </>
    )
}

export default Home;