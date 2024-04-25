/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// SwiperCore.use([Autoplay, Navigation]);

const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Home() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  return (
    <>
      {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-1"
            style={{
              backgroundColor: "#bee1e6",

              // background:"rgb(0,0,72)", background:"linear-gradient(90deg, rgba(0,0,72,1) 0%, rgba(69,76,133,1) 100%)"
              // backgroundImage: "linear-gradient(to right top, #639BED, #639BED, #639BED, #F7D25F, #F7D25F"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1
                    className="text-display-2 color-gray-700"
                    style={{ color: "#032d4e" }}
                  >
                    Redefining
                    <span
                      className="color color-gray-700"
                      style={{ color: "#032d4e" }}
                    >
                      {" "}
                      Hiring Culture.
                    </span>
                    <br></br>
                    <h1
                      className="color color-gray-600"
                      style={{ fontSize: "40px" }}
                    >
                      Discover NextGen Talent for Your Team
                    </h1>
                  </h1>
                  <p className="text-body-lead-large color-gray-600 mt-40 pr-40">
                    With HBR&#39;s AI-Powered Recruitment Process, you can{" "}
                    <br></br> unlock unmatched hiring precision.
                  </p>
                  <div className="mt-40" style={{ paddingLeft: "10px" }}>
                    <Link href="/page-contact">
                      <a className="btn btn-black icon-arrow-right-white">
                        Find Talent
                      </a>
                    </Link>
                    <Link href="/candidate_contact">
                      <a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                        Find Job
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    {/* <div className="video-block shape-1">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a>
                                            <span className="text-heading-4">Watch intro video</span>

                                        </div> */}
                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/homepage1/hero10.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-box overflow-visible mt-70">
          <div className="container" style={{ overflow: "hidden" }}>
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-5",
                nextEl: ".swiper-button-next-5",
              }}
              // className="swiper-wrapper pb-70 pt-5"
            >
              <div className="row justify-content-md-center">
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/bpo.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/it.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/health.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/ecom.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/manufac.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Agon"
                          src="assets/imgs/page/homepage1/retail.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                <h2 className="text-heading-1 color-gray-900">
                  Why You can Trust HBR for your hiring needs
                  {/* <br className="d-lg-block d-none" />the world over */}
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We can streamline your recruitment process with our expertise
                  .Our three-staged approach ensures thorough shortlisting,
                  precise identification, and rigorous evaluation, guaranteeing
                  the perfect fit for your team&#39;s needs.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container">
            <div className="text-center mt-90">
              <ul className="nav" role="tablist">
                <li onClick={() => handleOnClick(1)}>
                  <Link href="/#tab-1">
                    <a
                      className={
                        activeIndex === 1
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      BPO/ITES
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(2)}>
                  <Link href="/#tab-2">
                    <a
                      className={
                        activeIndex === 2
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      IT
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(3)}>
                  <Link href="/#tab-3">
                    <a
                      className={
                        activeIndex === 3
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      Healthcare
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(4)}>
                  <Link href="/#tab-4">
                    <a
                      className={
                        activeIndex === 4
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      E-Commerce
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(5)}>
                  <Link href="/#tab-5">
                    <a
                      className={
                        activeIndex === 5
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      Manufacturing
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(6)}>
                  <Link href="/#tab-6">
                    <a
                      className={
                        activeIndex === 6
                          ? "btn btn-default btn-bd-green-hover btn-select active"
                          : "btn btn-default btn-bd-green-hover btn-select"
                      }
                    >
                      Retail
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="tab-content">
              <div
                className={
                  activeIndex === 1
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-2 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Elevate Your BPO/ITES Operations with HBR&#39;s
                          Dynamic Hiring Solutions
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Elevate your BPO/ITES operations with HBR&#39;s expert
                          hiring services. We specialize in sourcing dynamic
                          professionals with the tech-savvy skills and adaptable
                          mindset your team needs to thrive. Let us fuel your
                          success with our passion for progress and commitment
                          to excellence. Experience the difference with HBR
                          today and unlock your team&#39;s full potential.
                        </p>
                        <div className="mt-20">
                          <Link href="/bpo_bpm_ites">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      {/* <div className="block-video"> */}
                      {/* <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}

                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/BPO.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 2
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-1 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Architecting the Future: Partner with HBR for IT
                          Excellence
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Picture a team of tech visionaries, not just coding,
                          but architecting the future. At HBR, we specialize in
                          sourcing dynamic professionals who drive innovation
                          and optimize systems. With expertise and agility, our
                          talent pool navigates the ever-evolving IT landscape,
                          ensuring your organization stays ahead of the curve.
                          Partner with HBR today and unleash the full potential
                          of your IT initiatives.
                        </p>
                        <div className="mt-20">
                          <Link href="/IT">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {/* <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/IT.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 3
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-3 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Catalysts of Change: Revolutionizing Healthcare with
                          HBR
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Envision a team of healthcare heroes, not just
                          practitioners, but catalysts of change. At HBR, we
                          cultivate a workforce of digital champions who
                          revolutionize patient care. With nimble fingers and
                          visionary minds, they craft innovative solutions that
                          elevate diagnosis, streamline workflows, and
                          profoundly impact lives. Join forces with HBR today
                          and embark on a journey to transform healthcare for
                          the better.
                        </p>
                        <div className="mt-20">
                          <Link href="/health_care">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {/* <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/healthcare.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 4
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-4 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Pioneering E-Commerce Success with HBR
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Imagine a team of digital pioneers reshaping the
                          online marketplace. At HBR, we specialize in sourcing
                          dynamic professionals who drive e-commerce success.
                          With a blend of innovation and expertise, our talent
                          pool navigates the digital landscape, optimizing sales
                          and enhancing customer engagement. Join forces with
                          HBR today and unlock the potential of your e-commerce
                          venture.
                        </p>
                        <div className="mt-20">
                          <Link href="/ecommerce">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {/* <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/E-commerce.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 5
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-5 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Driving Manufacturing Excellence with HBR
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Visualize a team of industry leaders, not just
                          assembling, but orchestrating innovation. At HBR, we
                          specialize in sourcing skilled professionals who keep
                          the wheels of industry turning smoothly. With
                          precision and expertise, our talent pool drives
                          quality control, efficiency, and excellence in
                          manufacturing. Partner with HBR today and
                          revolutionize your production processes for
                          unparalleled success.
                        </p>
                        <div className="mt-20">
                          <Link href="/manufacturing">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {/* <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/Manufacturing.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 6
                    ? "tab-pane fade  active show"
                    : "tab-pane fade "
                }
              >
                <div className="bg-6 panel-box mt-50">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-optimized">
                        <h3 className="text-heading-4">
                          Transform Your Retail Operations with HBR&#39;s
                          Innovative Hiring Solutions
                        </h3>
                        <p className="text-body-excerpt mt-15">
                          Revolutionize your retail operations with HBR&#39;s
                          tailored hiring services. We specialize in sourcing
                          dynamic professionals with customer-centric skills and
                          a passion for sales. Let us empower your team with top
                          talent and drive success in the competitive retail
                          landscape. Experience the difference with HBR today
                          and elevate your retail business to new heights.
                        </p>
                        <div className="mt-20">
                          <Link href="/retail">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      {/* <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a> */}
                      <img
                        className="img-responsive"
                        height="100%"
                        width="100%"
                        src="assets/imgs/page/homepage1/Retail.png"
                        alt="Agon"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                <h2 className="text-heading-1 color-gray-900">
                  Transformative Talent Acquisition
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Experience the power of innovation with HBR&#39;s
                  groundbreaking approach to talent acquisition. Our fusion of
                  advanced technology, strategic relationship-building, and
                  customized solutions leads to unparalleled recruitment
                  success.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-9 bg-local hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Technology Integration
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Harnessing AI and data-driven insights for optimized
                    recruitment processes.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-2">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-4 bg-local hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Building Relationships
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Strengthening connections with clients and candidates for
                    mutual success.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-2">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Discover More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-10 bg-social hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/social.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Tech Talent Acquisition
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Innovating recruitment with advanced technology and tailored
                    solutions.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-3">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/homepage1/img100.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <span className="tag-1">The Human Touch of HBR</span>
                <h3
                  className="text-heading-1 mt-30"
                  style={{ fontSize: "45px" }}
                >
                  We believe that our works can contribute to a better nation.
                </h3>
                <p
                  className="text-body-lead-large color-gray-600 mt-14"
                  style={{ fontSize: "17px" }}
                >
                  We&#39;re HBR, where empathy meets recruitment. See beyond
                  resumes, connect aspirations, offer personalized
                  consultations, ensure client immersion, and provide continuous
                  support. Join us for a fulfilling career journey.
                </p>
                <div className="line-bd-green mt-30" />
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-30">
                    <h4 className="text-heading-6 icon-leaf">Beyond Resumes</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Identify aspirations and unique skills beyond CVs for
                      meaningful connections.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-30">
                    <h4 className="text-heading-6 icon-leaf">
                      Personalized Consultations
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Tailored guidance and coaching for success in career
                      endeavors.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-40">
                    <h4 className="text-heading-6 icon-leaf">
                      Client Immersion
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Introduce candidates to company culture and ensure they
                      feel valued and understood.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-40">
                    <h4 className="text-heading-6 icon-leaf">
                      Continuous Support
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Offer ongoing career partnership, guidance, and resources
                      for sustained success and fulfillment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-120">
            <div className="bg-2 bdrd-58 pattern-white pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">
                    What We Offer
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Tailored staffing solutions including permanent and
                    temporary placements, payroll management, and in-house
                    staffing integration for seamless operations.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                    Our Happy Customers
                                </h3>
                                <p className="text-body-lead-large color-gray-600">
                                    Know about our clients, we are a woldwide
                                    corporate brand
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Company</span><Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most
                                        common</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single">
                                            <a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Marketing Event</span><Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An
                                        Incredible Rate</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Customer Services</span><Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know
                                        About?</a></Link>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box section-green mt-100">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                            Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                        </h3>
                    </div>
                    <PriceTable2 />
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Subscribe our newsletter
                                            </h4>
                                            <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <img src="/assets/imgs/template/chart.png" alt="Agon" />
                                            </div>
                                            <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
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

export default dynamic(() => Promise.resolve(Home), { ssr: false });
