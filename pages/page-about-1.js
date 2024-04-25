/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function About1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 color-orange-900">
                    Experience HBR's Journey
                  </span>
                  <h1 className="text-display-3 mt-30">
                    Mastering the Mosaic of Talent Across Industries
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    At HBR, we're not just about filling positions, we're about
                    mastering the mosaic of talent<br></br> across diverse
                    industries.
                  </p>
                  <div className="mt-40">
                    <Link href="/page-contact">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Find Talent
                      </a>
                    </Link>

                    <Link href="/candidate_contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Find Job
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block ">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/about/1/about1.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      className="img-responsive shape-2"
                      style={{ borderRadius: "30px" }}
                      alt="Agon"
                      src="assets/imgs/page/about/1/about2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        <CounterUp count={7} time={3} />+
                      </span>
                      <p className="text-body-text color-gray-500 pl-40t">
                        Years in Business
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        <CounterUp count={183} time={3} />+
                      </span>
                      <p className="text-body-text color-gray-500 pl-30">
                        Projects Done <br></br>(Ramp Up 183+)
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        <CounterUp count={4} time={3} />+
                      </span>
                      <p className="text-body-text color-gray-500 pl-10">
                        Locations
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        <CounterUp count={250} time={3} />+
                      </span>
                      <p className="text-body-text color-gray-500 pl-20">
                        Constant Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">HBR's Mission</span>
                </div>
                {/* <h2 className="text-display-3 color-gray-900 mb-10">
                  HBR's Mission 
                </h2> */}
                <h2 className="text-display-3 color-gray-900 mb-10">
                  Illuminated Through Purposeful Objectives
                </h2>
                <p className="text-body-lead-large color-gray-600 ">
                  We don't just build teams, we ignite them. Fueling companies
                  that change the world, one empowered workforce at a time.
                  <br></br>
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10 bg-5">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.png" alt="Agon" /></div>
                                


                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div> */}
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
              <div className="text-center mb-20">
                  <span className="tag-1">No Cost service</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-10">
                  Your Dream Job Shouldn't Cost You
                </h2>
                <p className="text-body-lead-large color-gray-600 ">
                  We at HBR know the job search can be tough. It's frustrating,
                  exciting, and sometimes confusing. That's why we want to put
                  your mind at ease with one crystal-clear fact:<br></br> HBR never
                  charges job seekers any fees.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
        </section>

        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
              <div className="text-center mb-20">
                  <span className="tag-1">Human-First Assurance</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-10">
                  Here's how we roll
                </h2>
                <p className="text-body-lead-large color-gray-600 ">
                  Zero application fees. Ever. No hidden costs. What you see is
                  what you get. (And what you get is awesome opportunities!)
                  Transparent communication. We'll keep you in the loop, every
                  step of the way. Remember, fraudulent offers often involve
                  upfront fees. If someone asks you to pay for a job, it's a red
                  flag! Stay safe, stay informed, and trust HBR to be your
                  human-first career champion.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
        </section>
        <section className="section-box mt-150">
          <div className="container">
            <div className="row">
              <div className=" col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  The Human Touch of HBR
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Beyond Resumes: Where Humanity Meets Recruitment
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-20">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Personalized career consultations:
                    </h4>
                    <p className="text-body-text color-gray-600 mt-10">
                      {" "}
                      We don't just send you on endless interviews. We guide
                      you, coach you, and prepare you for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Client immersion:</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      We don't just drop candidates into unknown waters. We
                      introduce you to the company culture, connect you with
                      potential colleagues, and ensure you feel valued. 
                      {/* and understood. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Continuous support:</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      {" "}
                      We're not just here for the placement. We're your
                      long-term career partner, offering guidance, resources,
                      and a supportive network to help you thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="text-center mb-20">
              <span className="tag-1 bg-6 color-green-900">
                Make Your Organization Future-Ready
              </span>
            </div>
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">
                  {" "}
                  Unleash Gen-Z's Powerhouse Potential with HBR
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Unlock tech-driven, purpose-fueled talent: Elevate your team
                  with Gen-Z's digital brilliance, ethical compass, and
                  adaptable minds.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/business-strategy.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Futureproof your workforce
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    HBR connects you with diverse problem-solvers who thrive in
                    change.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Fuel innovation and collaboration
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Proactive, continuous learners, Gen-Z brings fresh
                    perspectives and agility to every challenge.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/social.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    HBR: Your Gen-Z Talent Gateway
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Fuel your organization with these new talents, and make your
                    team with taskmasters.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Team</h3>
                                <p className="text-body-lead-large color-gray-600">Decades of experience in design and development</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TeamSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section> */}
        {/* <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More
                                </a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most common
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know About?
                                    </a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="7e90gBu4pas"
                    onClose={() => setOpen(false)}
                /> */}
      </Layout>
    </>
  );
}

export default About1;
