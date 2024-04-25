import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";
import React from "react";
import Link from "next/link";

function ContactUs() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div
            className="banner-hero banner-head-image"
            style={{
              background: "url(assets/imgs/page/blog/single/banner.png)",
            }}
          >
            <div className="container">
              <div className="text-center">
                <h1 className="text-heading-1 color-white mt-30">Contact Us</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-120">
            <div className="bdrd-58 box-gray-100 bg-6">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900 mt-30">
                    Where We Works
                  </h2>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                        Kolkata
                      </h4>
                      <p className="text-body-text color-gray-600">
                        8th Floor, DN-2 Signet Tower
                        <br />
                        College More Dn Block Unit 804
                      </p>
                      <p className="text-body-text color-gray-600">
                        Sector V, Saltlake, Kolkata
                      </p>
                      <p className="text-body-text color-gray-600">
                        West Bengal 700091
                      </p>
                      <p className="text-body-text color-gray-600">
                        09674757948
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                        Bengaluru
                      </h4>
                      <p className="text-body-text color-gray-600">
                        3rd Floor, 462, 17th &#39;C&#39; Main
                        <br />
                        2nd Cross Rd, 5th Block
                      </p>
                      <p className="text-body-text color-gray-600">
                        Koramangala, Bengaluru,
                      </p>
                      <p className="text-body-text color-gray-600">
                        Karnataka 560095
                      </p>
                      <p className="text-body-text color-gray-600">
                        08017204183
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                        Noida
                      </h4>
                      <p className="text-body-text color-gray-600">
                        3rd Floor, F-7
                        <br />
                        Block F
                      </p>
                      <p className="text-body-text color-gray-600">
                        Sector 3, Noida,
                      </p>
                      <p className="text-body-text color-gray-600">
                        Uttar Pradesh 201301
                      </p>
                      <p className="text-body-text color-gray-600">
                        09674757948
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                        Ranchi
                      </h4>
                      <p className="text-body-text color-gray-600">
                        3rd Floor, Kuleshwari Tower
                        <br />
                        Deputy Para Road, Kutchery Chowk
                      </p>
                      <p className="text-body-text color-gray-600">
                        Ahirtoli, Ranchi
                      </p>
                      <p className="text-body-text color-gray-600">
                        Jharkhand 834001
                      </p>
                      <p className="text-body-text color-gray-600">
                        09674757948
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-100">
          <div className="container text-center">
            <h3 className="text-heading-1 mb-10">Still have a questions?</h3>
            <p className="text-body-lead-large color-gray-600 mt-30">
              If you cannot find answer to your question in our FAQ, you can
              always
              <br className="d-lg-block d-none" />
              <Link href="/page-contact"><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Contact Us</a></Link>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
