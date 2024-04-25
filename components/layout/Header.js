/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header" >
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <img
                        alt="Agon"
                        height="60px"
                        width="65px"
                        src="/assets/imgs/template/logo-white.svg"
                      />
                    ) : (
                      <img
                        alt="Agon"
                        height="60px"
                        width="65px"
                        src="/assets/imgs/template/logohbr.png"
                      />
                    )}
                  </a>
                </Link>
              </div>

              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {/* <li 
                                        className="has-children"
                                        >
                                            <Link href="/"><a className="active">Home</a></Link>
                                            <ul className="sub-menu two-col">
                                                <li>
                                                    <Link href="/"><a><i className="fi fi-rr-home" />Homepage - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-2"><a><i className="fi fi-rr-home" />Homepage - 2</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-3"><a><i className="fi fi-rr-home" />Homepage - 3</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-4"><a><i className="fi fi-rr-home" />Homepage - 4</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-5"><a><i className="fi fi-rr-home" />Homepage - 5</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-6"><a><i className="fi fi-rr-home" />Homepage - 6</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-7"><a><i className="fi fi-rr-home" />Homepage - 7</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-8"><a><i className="fi fi-rr-home" />Homepage - 8</a></Link>
                                                </li>
                                            </ul>
                                        </li> */}
                    <li
                    // className="has-children"
                    >
                      <Link href="/page-about-1">
                        <a>About</a>
                      </Link>
                      {/* <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-about-1"><a><i className="fi fi-rr-star" />About Us - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-2"><a><i className="fi fi-rr-star" />About Us - 2</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-3"><a><i className="fi fi-rr-star" />About Us - 3</a></Link>
                                                </li>
                                            </ul> */}
                    </li>
                    <li className="has-children">
                      <Link href="#">
                        <a>What We Do</a>
                      </Link>
                      <ul className="sub-menu" style={{ width: "230px" }}>
                        {/* <li><h6>Our Services</h6></li> */}

                        <li>
                          <Link href="/bpo_bpm_ites">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              BPO, BPM & ITES
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/IT">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Information Technology
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/health_care">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Healthcare
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              E-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/manufacturing">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Manufacturing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/retail">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Retail
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/leadership_hiring">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Leadership Hiring
                            </a>
                          </Link>
                        </li>

                        {/* <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1"><a className="closer"><i className="fi fi-rr-database" />Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2"><a className="closer"><i className="fi fi-rr-database" />Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1"><a className="closer"><i className="fi fi-rr-headset" />FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2"><a className="closer"><i className="fi fi-rr-headset" />FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career"><a className="closer"><i className="fi fi-rr-briefcase" />Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail"><a className="closer"><i className="fi fi-rr-briefcase" />Career Detail</a></Link>
                                                </li> */}
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#">
                        <a>Solutions</a>
                      </Link>
                      <ul className="sub-menu" style={{ width: "230px" }}>
                        <li>
                          <Link href="/permanent_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Permanent Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contract_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Contract Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/in_house_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              In House Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/payroll_process">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Payroll Process
                            </a>
                          </Link>
                        </li>

                        {/* <li>
                                                    <Link href="/page-signup"><a><i className="fi fi-rr-user-add" />Sign Up</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login"><a><i className="fi fi-rr-fingerprint" />Log In</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset"><a><i className="fi fi-rr-settings" />Reset Password</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/404"><a><i className="fi fi-rr-exclamation" />Error 404</a></Link>
                                                </li> */}
                      </ul>
                    </li>

                    
                    <li>
                      <Link href="/blog-2">
                        <a>Insights</a>
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link href="/blog-1">
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              Blog Archive - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-2">
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              Blog Archive - 2
                            </a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link href="/blog-single">
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              Blog Single
                            </a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="/contactUs">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                        
                    </li>
                  </ul>
                </nav>

                
                <div
                  className="burger-icon burger-icon-white" 
                  onClick={handleOpen}
                > 
                
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>

           
            {/* <div className="block-signin" >
              <Link href="/candidate_contact">
                <a className="btn btn-default hover-up icon-arrow-right" >
                  Find Jobs
                </a>
              </Link>
            </div> */}

            
          </div>
        </div>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
