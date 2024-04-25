/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";


function In_house_staffing() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Revolutionize Your Staffing with HBR's In-House Solutions</h1>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Build the perfect team, unlock peak efficiency, and watch your success soar with HBR's In-House Staffing solutions. Say goodbye to HR headaches and hello to streamlined staffing processes.</p>
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
                                    <div className="banner-imgs"  style={{ marginTop: "30px" }}>
                                        {/* <div className="block-1 shape-2"><img src="/assets/imgs/page/services/1/banner-2.png" alt="Agon" /></div> */}
                                        <img className="img-responsive shape-1" src="/assets/imgs/page/services/1/is1.png" alt="Agon" />
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
                                <h2 className="text-heading-2 color-gray-900 mb-50">We're always looking for<br className="d-lg-block d-none" />new faces and fresh ideas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
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
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-team.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
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
                                    <img className="bdrd-16 img-responsive" src="/assets/imgs/page/services/1/is2.png" alt="Agon" />
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-6 col-sm-10 col-12 text-center">
                                <div className="text-center  mb-20"><span className="tag-1">More Than Hiring. Building a Culture of Talent.</span></div>
                                <h4 className="text color-gray-900 mb-10" style={{ fontSize: "31px" }}>Say Goodbye to Chaos with HBR's Tailored Approach</h4>
                                <p className="text-body-lead-large color-gray-600 mt-10 mb-60" style={{ fontSize: "18px" }}>
                                    Ditch generic hiring tactics and embrace a tailored In-House Staffing strategy designed specifically for your company. HBR analyzes your culture, goals, and values to attract the perfect talent.<br></br>
                                </p>
                                <h4 className="text color-gray-900 mb-10" style={{ fontSize: "31px" }}>Tailored Recruitment Strategy</h4>
                                <p className="text-body-lead-large color-gray-600 mt-20 mb-70" style={{ fontSize: "18px" }}>
                                    We dive deep into your company's DNA to create a roadmap that attracts passionate individuals perfectly aligned with your vision.<br></br>
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" ></div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-30">
                                {/* <span className="tag-1 bg-6 color-green-900">Built Exclusively For You</span> */}
                                <h3 className="text-heading-1 mt-30">Discover Hidden Talent Gems with HBR's Expertise </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">HBR goes beyond surface-level resumes to uncover hidden talent gems with expertise in niche fields and fresh perspectives. Our talent mapping process guides you to untapped potential within your organization. </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Understanding Company DNA</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We analyze your company culture, goals, and values to craft a tailored recruitment strategy.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Unearthing Hidden Gems</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Leveraging advanced tools and expert insights, we uncover diverse talent who bring unique perspectives to your team.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Talent Mapping</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Our talent mapping expertise guides you to untapped potential within your organization.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Streamlined Recruitment Process</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">From talent identification to onboarding, we manage every step of the journey with ease and efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <div className="inner-image mt-35"><img className="bdrd-16 img-responsive" src="/assets/imgs/page/services/1/is3.png" alt="Agon" />
                                    {/* <div className="block-image-bottom">
                                    <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" />
                                    </div> */}
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

export default dynamic(() => Promise.resolve(In_house_staffing), { ssr: false })