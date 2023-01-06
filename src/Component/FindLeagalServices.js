import React from 'react'
import ConectMobileImg from '../assets/images/conectMobile.png'
import ClarityEmployee from '../assets/images/clarity_employee.png'
import Hostpot from '../assets/images/hostpot.png'
import Comma from '../assets/images/comma.png'
import UserMen from '../assets/images/usermen.png'
import ArrowRight from '../assets/images/right_arrow.png'







const FindLeagalServices = () => {
    return (
        <>
            <section className='legal_consultancy'>
                <div class="container findleagal_con">
                    <div class="row">
                        <div class="col-sm-4">
                            <img className='connect-mobile' src={ConectMobileImg} />
                        </div>
                        <div class="col-sm-7 right_cstm_legal_div">
                            <p className='heading-leagal-service'>BEST LAWYERS IN UAE FOR LEGAL SERVICES ONLINE</p>
                            <h1 className='new_mobile_class'><span className='second_ehading_lagal_srvice'>Find legal Services</span> with one click and get your Legal Advice.</h1>

                            <p>Make an appointment with Advocates and Legal consultancy, Today! or chat with a lawyer online for free in Dubai and across UAE now, We work on a wide range of legal matters. Our legal Services from the Legal staff is here to assist you with proper guidance...<span className='read_more'>(read more)</span> </p>
                            <div class="row">
                                <div class="col-sm-4 one_extra">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={UserMen} />
                                        <b>Get Free Legal Advice Services</b>
                                    </span>
                                </div>
                                <div class="col-sm-4">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={Hostpot} />
                                        <b> Free online legal consultation</b>
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={Comma} />
                                        <b>Free 24 hour legal advice chat</b>
                                    </span>
                                </div>
                                <div class="col-sm-4">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={ClarityEmployee} />
                                        <b>Hire a Lawyer</b>
                                    </span>
                                </div>
                            </div>
                            <br />
                            <div className='button_and_arrow'>
                                <button className='green_btn'>Contact now</button>
                                <span className='button_arrow_handle' ><img src={ArrowRight} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
        </>
    )
}

export default FindLeagalServices