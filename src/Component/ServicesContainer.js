import React from 'react';
import '../assets/css/services.css'
import quote  from '../assets/images/Vector-quote.png'
import AmgImage  from '../assets/images/rectangleImg.png'
import img2 from '../assets/images/rectangle-104.png'
import img3 from '../assets/images/rectangle-105.png'
import img4 from '../assets/images/rectangle-111.png'
import img5 from '../assets/images/rectangle-110.png'
import img6 from '../assets/images/rectangle-109.png'
 
const ServicesContainer = () => {
  return (
    <div className='services-container'>
        <div className='services-left-container'>
            <div className='client-says'>
                <div className='client-says-header'>
                    <div className='heading-client-says'>
                        <div className='testimonials'>TESTIMONIALS</div>
                        <div className='what-client-says'>what <br/> client says</div>
                    </div>
                    <div className='quote-div'>
                        <div>
                        <img src={quote}  alt="sdsd" height="20%" width="20%" />
                        </div>
                    </div>
                    
                </div>
                    
                    <div className='body-text1'>
                        "We quickly had to get legal counsel, 
                        and luckily for us, we found the Connect 
                        Legal platform. The rapport and guidance 
                        was outstanding at all times, prompt, 
                        timely, and open for calls and quick updates".
                    </div>
            </div>
            
        </div>
        <div className='services-right-container'>
            <div className='first-column'>
                <div>
                    <div className='client-container'>
                        <img src={AmgImage}  alt="sdsd"  />
                    </div>
                    <div className='client-container'>
                        <img src={img2}  alt="sdsd"  />
                    </div>
                    <div className='client-container'>
                        <img src={img3}  alt="sdsd"  />
                    </div>
                    <div className='client-container'>
                        <img src={img2}  alt="sdsd"  />
                    </div>
                    <div className='client-container'>
                        <img src={img4}  alt="sdsd"  />
                    </div>
                </div>
            </div>
            
            <div className='first-column'>
                <div>
                    <div className='client-container'>
                        <img src={img5}  alt="sdsd" />
                    </div>
                    <div className='client-container'>
                        <img src={img2}  alt="sdsd" />
                    </div>
                    <div className='client-container'>
                        <img src={img2}  alt="sdsd" />
                    </div>
                    <div className='client-container'>
                        <img src={img6}  alt="sdsd" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesContainer