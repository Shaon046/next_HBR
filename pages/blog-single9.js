/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";

function BlogSingle9() {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div
              className="banner-hero banner-head-image"
              style={{
                background: "url(assets/imgs/page/blog/single/banner.png)",
              }}
            >
              <div className="container">
                <div className="text-center">
                  <span className="tag-1 bg-6 color-green-900">
                    TECHNOLOGY NEWS
                  </span>
                  <h1 className="text-heading-1 color-white mt-30">
                    Efficient Onboarding
                    <br className="d-lg-block d-none" />
                    Streamlining the Talent Integration Process
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box mt-50 mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-md-12" />
                <div className="col-lg-1 col-md-2 col-sm-2 col-3 text-center">
                  <div className="social-sticky">
                    <h3 className="text-heading-6 color-gray-400 mb-20 mt-5">
                      Share
                    </h3>
                    <Link href="https://www.facebook.com/HumanBeforeResource/">
                      <a className="share-social share-fb"></a>
                    </Link>
                    <br />
                    <Link href="#">
                      <a className="share-social share-tw"></a>
                    </Link>
                    <br />
                    <Link href="#">
                      <a className="share-social share-pi"></a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-10 col-9">
                  <div className="text-summary">
                    With a quick hiring process, ensuring a seamless onboarding
                    experience for new talent is essential to set them up for
                    success and accelerate their integration into the
                    organization. By adopting efficient onboarding practices,
                    companies can maximize productivity, engagement, and
                    retention from day one.
                  </div>
                  {/* <div className="text-summary">
                  Attracting and retaining good talent requires more than just offering competitive salaries and benefits. It
demands a commitment to creating an environment where talent can thrive, grow, and feel valued.
                  </div> */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="row">
                    {/* <div className="col-lg-6 col-md-7 col-sm-7 col-7">
                      <div className="blog-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="/assets/imgs/page/blog/2/user-3.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900">
                          Jane Cooper
                        </h4>
                        <p className="text-body-small color-gray-500">
                          August 25, 2022
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-5 col-5 tag-mb text-end">
                      <span className="tag-1 bg-6 color-green-900 mt-40">
                        18 comments
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="single-detail mt-50">
                    <img
                      className="img-responsive bdr-16"
                      src="assets/imgs/page/blog/single/b9-s1.png"
                      alt="Agon"
                      width={900}
                      height={500}
                    />
                    <p />
                    <p>
                      Let&#39;s explore strategies for onboarding talent with a
                      quick hiring process.
                    </p>
                    {/* <h2 className="text-heading-3">
                      The Skills Success Equation
                    </h2>
                    <h6>
                      Skills Success = Assessment + Acquisition + Application +
                      Adaptation
                    </h6> */}
                    <p />
                    {/* <div className="box-quote">
                      <div className="text-quote">
                        Blandit consequat feugiat sed dapibus lorem diam nibh
                        venenatis sodales pulvinar augue adipiscing turpis nulla
                        sit tincidunt non lacus sit amet et white dreamy
                        dramatically place.
                      </div>
                      <div className="box-user">
                        <div className="img-user">
                          <img
                            src="/assets/imgs/page/blog/single/user-4.png"
                            alt="Agon"
                          />
                        </div>
                        <span className="text-heading-5 color-white">
                          Ronald Richards
                        </span>
                      </div>
                    </div> */}
                    <p />
                    <span className="tag-1 bg-5 color-green-900 mt-40 mb-30">
                      Comprehensive Onboarding Guidelines
                    </span>
                    <h3 className="text-heading-4">
                      Pre-Onboarding Preparation
                    </h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Prioritize pre-onboarding preparations to ensure a
                          smooth transition for new hires. Gather necessary
                          paperwork, equipment, access credentials, and training
                          materials in advance to minimize delays.
                        </p>
                        <h3 className="text-heading-4">
                          Welcome and Orientation
                        </h3>
                        <p>
                          Extend a warm welcome to new hires on their first day
                          with a comprehensive orientation session. Provide an
                          overview of the company culture, values,
                          organizational structure, and key policies.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b9-s2.jpg"
                          alt="Agon"
                          height={330}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">
                      Clear Expectations and Objectives
                    </h3>
                    <p>
                      Set clear expectations and objectives for new hires to
                      align their roles and responsibilities with organizational
                      goals. Define performance metrics and milestones to track
                      progress and success.
                    </p>

                    <h3 className="text-heading-4">Buddy or Mentor Program</h3>
                    <p>
                      Pair new hires with a buddy or mentor to provide guidance,
                      support, and assistance during the onboarding process.
                      Encourage mentorship relationships to facilitate knowledge
                      transfer and integration into the team.
                    </p>
                    <h3 className="text-heading-4 ">Role-Specific Training</h3>
                    <p>
                      Provide targeted training and resources tailored to the
                      specific role and responsibilities of each new hire. Offer
                      hands-on training, shadowing opportunities, and access to
                      online learning platforms to accelerate skill development.
                    </p>
                    <h3 className="text-heading-4 ">
                      Technology and Systems Familiarization
                    </h3>
                    <p>
                      Ensure new hires have access to necessary technology,
                      software, and systems required to perform their roles.
                      Provide comprehensive training on company-specific tools,
                      processes, and workflows to minimize learning curves.
                    </p>
                    <h3 className="text-heading-4 ">
                      Ongoing Feedback and Suppor
                    </h3>
                    <p>
                      Establish regular check-ins and feedback sessions to
                      monitor progress, address concerns, and provide support.
                      Encourage open communication and create a safe space for
                      new hires to ask questions and seek guidance.
                    </p>
                    <h3 className="text-heading-4 ">
                      Integration into Team and Culture
                    </h3>
                    <p>
                      Facilitate opportunities for new hires to interact with
                      colleagues, participate in team meetings, and engage in
                      social activities. Foster a sense of belonging and
                      inclusion by integrating new hires into the company
                      culture and community.
                    </p>
                    <h3 className="text-heading-4 ">Continuous Improvement</h3>
                    <p>
                      Solicit feedback from new hires and stakeholders to
                      identify areas for improvement in the onboarding process.
                      Continuously refine and optimize onboarding procedures to
                      enhance effectiveness and efficiency.
                    </p>
                    <div className="row mt-45 mb-30">
                      <div className="col-lg-6">
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b9-s3.jpg"
                          alt="Agon"
                          height={465}
                          width={420}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="img-responsive mb-20"
                          src="assets/imgs/page/blog/single/b9-s4.jpg"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b9-s5.png"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                      </div>
                      {/* <div className="caption-img mt-10 text-center color-gray-400">
                        furniture in your house
                      </div> */}
                    </div>
                    <p />
                    <h3 className="text-heading-3 mt-90">Conclusion</h3>
                    <p>
                      Efficient onboarding is crucial for maximizing the
                      potential of new hires and accelerating their integration
                      into the organization. By implementing these strategies,
                      companies can streamline the talent integration process,
                      boost productivity, and foster long-term engagement and
                      retention. A quick hiring process coupled with effective
                      onboarding sets the stage for success and ensures new
                      hires hit the ground running from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

// export default BlogSingle;
export default dynamic(() => Promise.resolve(BlogSingle9), { ssr: false });
