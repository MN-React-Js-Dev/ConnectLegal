import React from 'react'
import Vector from '../../assets/images/vector.png'
const Header = () => {
    return (
        <>
            <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <a href="#" class="logo">
                                    <img className='menu-logo' src={Vector} />
                                    <span > <h4 className='text-white'>Connect Legal</h4>  </span>
                                </a>
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                                    <li class="scroll-to-section"><a href="#about">How it Work</a></li>
                                    <li class="scroll-to-section"><a href="#services">For Lawyers</a></li>
                                    <li class="scroll-to-section"><a href="#portfolio">Blogs & Articles</a></li>
                                    <li class="scroll-to-section"><a href="#blog">Lawyers</a></li>
                                    <li class="scroll-to-section"><a href="#contact">Practice Area</a></li>
                                    <li class="scroll-to-section"><a href="#contact">Login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header