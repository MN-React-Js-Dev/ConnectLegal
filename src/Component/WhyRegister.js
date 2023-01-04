import React from 'react'
import CircleArrow from '../assets/images/circle_arrow.png'
import CircleMen from '../assets/images/Group292.png'
import Notification from '../assets/images/notification.png'
import Group290Img from '../assets/images/Group290.png'



const WhyRegister = () => {
    return (
        <>
            <section className='Looking_for_lawyer' >
                <div className="container div_main">
                    <div className="row">
                        <div className="col-sm">
                            <div className='lift_div'>
                                <h1>Why Register?</h1>
                                <p>Keep the history of all your chats, questions and callback requests. Adding a lorem ipsum here.</p>
                                <img className='circle_arrow_img' src={CircleArrow} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='right_div'>
                                <div className="row">
                                    <img className='row_image_class' src={Group290Img} />
                                    <span>
                                        <p className=''>Keep the history of all your chats, questions and callback requests</p>
                                    </span>

                                </div>
                                <div className="row">
                                    <img className='row_image_class' src={CircleMen} />
                                    <span>
                                        <p className=''>Track your interactions with lawyers and receive notifications</p>
                                    </span>
                                </div>

                                <div className="row">
                                    <img className='row_image_class' src={Notification} />
                                    <span>
                                        <p className=''>Track your interactions with lawyers and receive notifications</p>
                                    </span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyRegister