import React from 'react'
import ConnectLogo from '../../assets/images/connectLogio.png'
const Footer = () => {

    return (
        <>           
            <div class="container my-5">
                <footer class="text-center text-lg-start text-white" style={{ "background-color": "rgb(32 140 132)" }} >
                    <div class="container p-4 pb-0">
                        <section class="">
                            <div class="row">
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    {/* <h6 class="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h6>    */}
                                        {/* <img className='connect-logo-class' src={ConnectLogo}/> */}

                                    <h4 className='text-white'>Connect Legal</h4>
                                </div>
                                <hr class="w-100 clearfix d-md-none" />
                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-capitalize mb-4 font-weight-bold">About Company</h6>
                                    <p>
                                        <a class="text-white ">About company</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Our services</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Job opportunities</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Contact us</a>
                                    </p>
                                </div>


                                <hr class="w-100 clearfix d-md-none" />
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-capitalize mb-4 font-weight-bold">
                                        Customer Desk
                                    </h6>
                                    <p>
                                        <a class="text-white">Client support</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Pricing packages</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Company story </a>
                                    </p>
                                    <p>
                                        <a class="text-white">Latest news</a>
                                    </p>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-capitalize mb-4 font-weight-bold">
                                        Client resources
                                    </h6>
                                    <p>
                                        <a class="text-white">Theme guide</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Support desk</a>
                                    </p>
                                    <p>
                                        <a class="text-white">What we offer </a>
                                    </p>
                                    <p>
                                        <a class="text-white">Company history</a>
                                    </p>
                                </div>

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-capitalize mb-4 font-weight-bold">
                                        Our Services
                                    </h6>
                                    <p>
                                        <a class="text-white">Brand Expirence</a>
                                    </p>
                                    <p>
                                        <a class="text-white">E-commerce website</a>
                                    </p>
                                    <p>
                                        <a class="text-white">content writing</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Marketing strategy</a>
                                    </p>
                                </div>


                            </div>
                        </section>


                        <hr />


                        <section class="pt-0">
                            <div class="row d-flex align-items-center">
                                <div class="col-md-7 col-lg-8 text-center text-md-start cstm-hr">
                                    <div class="p-3">
                                        {/* <img className='connect-logo-class' src={ConnectLogo}/> */}
                                        <a class="text-white" href="#">Connect Legal</a>
                                        <span className='text-center add-cstspan '>© 2021 Litho is Proudly Powered by ThemeZaa</span>
                                    </div>
                                </div>

                                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a class="btn btn-outline-light btn-floating m-1" role="button"  ><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-outline-light btn-floating m-1 text-center" role="button" ><i class="fab fa-facebook-f"></i ></a>
                                    <a class="btn btn-outline-light btn-floating m-1 text-center" role="button" ><i class="fab fa-linkedin "></i ></a>

                                </div>

                            </div>
                        </section>

                    </div>

                </footer>

            </div>
        </>
    )
}

export default Footer