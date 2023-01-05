import React from 'react'
import '../../assets/css/clientreview.css'
import starimages from '../../assets/images/group-81.png';
import clientimg1 from '../../assets/images/group-79.png';
import clientname1 from '../../assets/images/group-80.png';


const ClientReview4 = () => {
  return (
    <div className='client-review-container'>
        <div className='client-review'>
            "We quickly had to get legal counsel, 
            and luckily for us, we found the Connect 
            Legal platform. The rapport and guidance 
            was outstanding at all times, prompt”.
            {/* <img src={reviewmsg} alt="review Msg" /> */}
        </div>
        <div className='cleints-personal'>
            <div className='client-img'>
                <div className='images-client1'>
                    <img src={clientimg1} alt="client-img" />
                </div>
                <div className='name-client1'>
                    <img src={clientname1} alt="client-img" />
                </div>
            </div> 

            <div className='star-section'>
                <div className='star-images'>
                    <img src={starimages} alt="client-img" />
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ClientReview4;
