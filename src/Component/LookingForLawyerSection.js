import React from 'react'
import AdobeImg from '../assets/images/LayerLook.png'
import ArrowRight from '../assets/images/right_arrow.png'



const LookingForLawyerSection = () => {
  return (
    <>
      <section className='Looking_for_lawyer' >
        <div class="container">
          <div className="container div_main">
            <div className="row">
              <div className="col-sm">
                <div className='lift_div p-5'>
                  <img className='AdobeImgimage_class' src={AdobeImg} />
                </div>
              </div>
              <div className="col-sm">
                <div className='right_div '>
                  <p className='greenline_para'>HOW IT WORKS</p>
                  <h1 className='rightdiv_heading'>Looking for a lawyer?</h1>
                  <p className='rightdiv_para'>Find duly licensed practicing lawyers or law firms in our unique lawyer directory.
                    Select the one right for you by office location, practice area or language.
                    Compare lawyers by their expertise and rating.
                  </p>
                  <div className='button_and_arrow hover-zoom'>
                    <button className='green_btn'>Contact now</button>
                    <span className='button_arrow_handle ' ><img c src={ArrowRight} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default LookingForLawyerSection