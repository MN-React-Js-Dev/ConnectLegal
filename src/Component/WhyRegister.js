
import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import eye from '../assets/images/eye.png'
import Are_You from "../assets/images/Are_You.png";
import "../assets/css/why-register.css"



const WhyRegister = () => {
  return (
    <> <section className='prov-services_conatiner-ma'>
        <div className='conatainer hi_class'>
          <div className='row'>
            <div className='col-sm-6'> <img src={Are_You} className='Are_Yousdf' /></div>
            <div className='col-sm-6'>
              <form className='form-getstart'>
                <h1 className='Heading'>Get started</h1>
                <a className='Headingsub'>Alredy have account? <e style={{ color: "#3DC9A1" }}>sign in</e></a>
                <br />
                <br />
                <div>
                  <lable className='lableclass'>Name</lable>
                  <br />
                  <input className='Inputclass' type='text' placeholder='Enter your name'></input>
                </div>
                <br />
                <div>
                  <lable className='lableclass'>Email Address</lable>
                  <br />
                  <input className='Inputclass' type='email' placeholder='email@domaim.com' />
                </div>
                <br />
                <div>
                  <lable className='lableclass'>Password </lable>
                  <br />
                  <input className='Inputclass' type='password' /> 
                </div>
                <br />
                <a className='f_pasword' >forgot Password</a>
                <br />
                <br />
                <br />
                <button className='Sign_button'>Sign Up</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export default WhyRegister