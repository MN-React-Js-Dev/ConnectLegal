import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/third-container.css"
import img1 from "../assets/images/Ellipse 3.png"
import img2 from "../assets/images/Group 148.png"
import img3 from "../assets/images/Group 149.png"
import imgData from "../assets/images/Group 65.jpg"

function secondcontainer() {
  return (
  <>  
 <Container className='main-container'>
      <Row class="row">
        <Col className='first-container'>
        <p className='first-container-'>My Question #98</p>
      <p>There are many variations of passages of Lorem Ipsum available, but the
       majority have suffered alteration in some form, by injected humour, or 
       randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
         anything embarrassing hidden in the middle of text.</p>
    <div className='user-data'>
    <img src={img1} className="img-data" /><span>Jaidev Kumar</span>
    
    </div>
    <div className='user-data-data'>
    <img src={img2} className="img-data" />  <span>George Brown<br/></span>
    </div>
    <div className='user-data-data'>
    <img src={img3} className="img-data" /> <span>Denali Balan </span>
    </div>
    </Col>
      <Col  className='second-container'>  
      <h1>Ask & Book <br/> Appointments with <br/>
       Multiple Lawyers
      </h1>
      <p>Make an appointment with Advocates and Legal consultancy, 
        Today! or chat with a lawyer online for free in Dubai and across UAE now,
         We work on a wide range of legal matters. Our legal Services.
      </p>
      <img class="w-50 p-3" src={imgData}  />
     </Col>
      </Row>
    </Container>
  </>
  )
}

export default secondcontainer