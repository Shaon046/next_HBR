/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";


function Leader() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Harness the Power of Leadership Hiring Solutions</h1>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Empower your team with HBR&#39;s tailored leadership hiring solutions, precisely crafted to meet your executive recruitment needs.</p>
                                    <div className="mt-40">
                                    <Link href="/page-contact"><a className="btn btn-black shape-square icon-arrow-right-white">Find Talent
                                            </a></Link>
                                            <Link href="/page-about-2"><a className="btn btn-link icon-triangle color-gray-900 ml-40">Find Job
                                            </a></Link>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Projects done</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">18</span></span></h4>
                                                        <p className="text-body-text color-gray-500">Offices / Factories</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs" style={{marginTop:"30px"}}>
                                        <img className="img-responsive shape-1" src="/assets/imgs/page/services/1/lead1.png" alt="Agon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">Find Your Perfect Fit. Hire with Confidence.</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">We&#39;re always looking for<br className="d-lg-block d-none" />new faces and fresh ideas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it&#39;s due.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Web Developer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We become a bonafide agency with a tiny team of 3 and then hire our first developers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Business Analyst</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We create our first campaign for Kaleidoscope Tech and it goes viral</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Product Designer</h4>
                                        <p className="text-body-text color-gray-500 mt-15">With a growing body of work, we bring more artists, designers on board.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Share stories</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it&#39;s due.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it&#39;s due.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-team.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it&#39;s due.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-lg-5 col-sm-10 col-12 text-center">
                                <div className="image">
                                    <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/lead2.png" alt="Agon" />
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-6 col-sm-10 col-12 text-center">
                                <div className="text-center  mb-20"><span className="tag-1">Find the leader that shapes your tomorrow</span></div>
                                <h4 className="text color-gray-900 mb-10" style={{ fontSize: "31px" }}>Fuel Your Innovation Engine: Find Your Future Leaders with HBR</h4>
                                <p className="text-body-lead-large color-gray-600 mt-10 mb-60" style={{ fontSize: "18px" }}>
                                    Stop searching blindly. Elevate your organization with meticulously crafted leadership solutions. Secure top-tier executives, perfectly aligned with your vision, on your timeline. From key leadership positions to C-suite expansion, we empower your team for exponential growth.<br></br>
                                </p>
                                <h4 className="text color-gray-900 mb-10" style={{ fontSize: "31px" }}>We craft a leadership recruitment journey designed just for you</h4>
                                <p className="text-body-lead-large color-gray-600 mt-20 mb-70" style={{ fontSize: "18px" }}>
                                    Your Vision, Our Mission<br></br>
                                    Imagine your ideal leader. Partner with us. We bridge the gap between vision & reality with a tailored search that delivers top-tier talent aligned to your unique vision & mission.<br></br>
                                </p>

                            </div>
                            

                            <div className="col-lg-1 col-sm-1 col-12" ></div>
                        </div>
                    </div>
                </section>


                <section className="section-box mb-60">
                        <div className="container mt-90 mb-lg-100">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-2 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Client-Centric Solutions
                                        </h4>
                                        {/* <p className="text-body-text-md color-gray-600">
                                            Working closely with clients to gain insights into their healthcare staffing challenges and develop personalized recruitment strategies.
                                        </p> */}
                                        <div className="box-image-inner bg-color-1">
                                            <img style={{borderRadius:"15px"}} src="/assets/imgs/page/services/1/lead3.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-6 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Focused on Client Success
                                        </h4>
                                        {/* <p className="text-body-text-md color-gray-600">
                                            Going beyond traditional recruitment methods to deliver results that support our clients&#39; success and enhance patient care delivery.
                                        </p> */}
                                        <div className="box-image-inner bg-color-2">
                                            <img style={{borderRadius:"15px"}} src="/assets/imgs/page/services/1/lead4.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-30">
                                {/* <span className="tag-1 bg-6 color-green-900">Built Exclusively For You</span> */}
                                <h3 className="text-heading-1 mt-30">Chart Your Course to Success: Navigate the Leadership Landscape with HBR&#39;s Expertise</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Elevate your leadership journey. Expert advisors, personalized approach, seamless integration - HBR delivers perfect-fit leaders, every time.</p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Roadmap to Success</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Chat with our leadership experts & map out your dream team strategy.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Tailored Talent Blueprint</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Craft your ideal leader search with our experts. Attract, assess, onboard - the perfect fit.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Find Your Missing Piece</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We source leaders you never knew existed. Unleash potential, unlock growth.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">From Search to Synergy</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15"> Find the best. Smoothly onboard. Experience the HBR difference - every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <div className="inner-image"><img className="bdrd-16 img-responsive" src="/assets/imgs/page/services/1/lead5.png" alt="Agon" />
                                    {/* <div className="block-image-bottom"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" /></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box mt-70">
                    <div className="container mt-50">
                        <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                    </div>
                    <div className="container mt-20">
                        <div className="text-center block-bill-2 mt-10"><span className="text-lg text-billed">Billed Monthly</span><label className="switch ml-20 mr-20"><input id="cb_billed_type" type="checkbox" name="billed_type" /><span className="slider round" /></label><span className="text-lg text-billed">Bill Annually</span></div>
                        <div className="block-pricing block-pricing-2 mt-70">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                            <div className="box-pricing-item hover-up">
                                                <div className="box-info-price"><span className="text-heading-3 for-month display-month">$35</span><span className="text-heading-3 for-year">$420</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                <div className="line-bd-bottom">
                                                    <h4 className="text-heading-5 mb-15">Standard</h4>
                                                    <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li>Unlimited updates</li>
                                                    <li>Custom permissions</li>
                                                    <li>Custom designs &amp; features</li>
                                                </ul>
                                                <div>
                                                    <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="box-pricing-item active hover-up">
                                                <div className="box-info-price"><span className="text-heading-3 for-month display-month">$89</span><span className="text-heading-3 for-year">$1068</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                <div className="line-bd-bottom">
                                                    <h4 className="text-heading-5 mb-15">Essentials</h4>
                                                    <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li>Unlimited updates</li>
                                                    <li>Custom permissions</li>
                                                    <li>Custom instructors</li>
                                                </ul>
                                                <div>
                                                    <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="box-pricing-item hover-up">
                                                <div className="box-info-price"><span className="text-heading-3 for-month display-month">$125</span><span className="text-heading-3 for-year">$1500</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                <div className="line-bd-bottom">
                                                    <h4 className="text-heading-5 mb-15">Premium</h4>
                                                    <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li>Unlimited updates</li>
                                                    <li>Custom designs &amp; features</li>
                                                    <li>Custom permissions</li>
                                                    <li>Custom instructors</li>
                                                </ul>
                                                <div>
                                                    <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="box-pricing-item hover-up">
                                                <div className="box-info-price"><span className="text-heading-3 for-month display-month">$199</span><span className="text-heading-3 for-year">$2388</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                <div className="line-bd-bottom">
                                                    <h4 className="text-heading-5 mb-15">Unlimited</h4>
                                                    <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li>Unlimited updates &amp; Support</li>
                                                    <li>Custom designs &amp; features</li>
                                                    <li>Custom permissions</li>
                                                    <li>Custom instructors</li>
                                                </ul>
                                                <div>
                                                    <Link href="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </Layout>

        </>
    )
}

export default dynamic(() => Promise.resolve(Leader), { ssr: false })