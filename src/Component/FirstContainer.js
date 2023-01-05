import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/first-container.css"
// import img3 from "../assets/images/Group 46.jpg"
import imgData from "../assets/images/Group 65.jpg" 
import img1 from "../assets/images/Vectordata.png" 
import img2 from "../assets/images/Vector (1).png" 
import img3 from "../assets/images/Vector (2).png" 
import img4 from "../assets/images/Vector (3).png" 
function FirstContainer() {
  return (
    <>
    <Container className='first-main-container'>
      <Row>
        <Col  class="col-8">
          <h2 className='text-white'>Connect Legal</h2>
          <h1 className='text-white'>
          Get Online Legal Support <br/> Services
          </h1>
         <p className='text-white'>This Platform Provides an opportunity to Connect Lawyers or Legal
           Consultants with those who are seeking for Legal Advice in UAE</p>
           <img class="w-50 p-3" src={imgData}  /> 
        </Col>
        <Col  class="col-4">
        <div className='first-card-data'>
         <img src={img1} className="img-data" />  <span><b> Find a Lawyer</b><br/>This is a lorem ipsum and will be<br/>remplaced for another text.<br/></span>
         </div>
         <br/>
         <div className='second-card-data'>
         <img src={img2} className="img-data" />  <span><b> Hire a Lawyer</b><br/>This is a lorem ipsum and will be<br/>remplaced for another text.<br/></span>
         </div>
         <br/>
         <div className='third-card-data'>
         <img src={img3} className="img-data" />  <span><b> Lawyers Services</b><br/>This is a lorem ipsum and will be<br/>remplaced for another text.<br/></span>
         </div>
         <br/>
         <div className='fourth-card-data'>
         <img src={img4} className="img-data" />  <span><b>Legal Blogs & articles</b><br/>This is a lorem ipsum and will be<br/>remplaced for another text.<br/></span>
         </div>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default FirstContainer