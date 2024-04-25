/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";

function BlogSingle12() {
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
                    Understanding the Jobseeker&#39;s Wishlist
                    <br className="d-lg-block d-none" />
                    What They Really Want in Their Next Role
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
                    Jobseekers are not just looking for any job; they are
                    searching for the right opportunity that aligns with their
                    values, goals, and aspirations. Understanding what
                    jobseekers want can help employers attract and retain top
                    talent.
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
                      src="assets/imgs/page/blog/single/b12-s1.png"
                      alt="Agon"
                      width={900}
                      height={500}
                    />
                    <p />
                    <p>
                      Let&#39;s dive into the jobseeker&#39;s wishlist and
                      explore what they really want in their next role.
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
                      Top Priorities for Jobseekers
                    </span>
                    <h3 className="text-heading-4">Meaningful Work</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Jobseekers desire roles that provide a sense of
                          purpose and fulfillment. They want to make a
                          meaningful impact and contribute to something greater
                          than themselves.
                        </p>
                        <h3 className="text-heading-4">
                          Career Growth Opportunities
                        </h3>
                        <p>
                          Jobseekers are looking for opportunities to grow,
                          develop their skills, and advance in their careers.
                          They seek employers who offer clear paths for
                          advancement, training programs, and mentorship
                          opportunities.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b12-s2.jpg"
                          alt="Agon"
                          height={310}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">
                      Competitive Compensation and Benefits
                    </h3>
                    <p>
                      Fair and competitive compensation packages are essential
                      for jobseekers. They also value additional benefits such
                      as healthcare, retirement plans, and bonuses.
                    </p>

                    <h3 className="text-heading-4">Positive Company Culture</h3>
                    <p>
                      Jobseekers want to work for companies with a positive and
                      inclusive culture. They value environments where they feel
                      valued, respected, and supported by colleagues and
                      leadership.
                    </p>
                    <h3 className="text-heading-4 ">
                      Opportunities for Impact and Growth
                    </h3>
                    <p>
                      Jobseekers want to work on projects that make a difference
                      and have a meaningful impact. They seek environments that
                      foster innovation, creativity, and collaboration.
                    </p>
                    <h3 className="text-heading-4 ">
                      Strong Leadership and Management
                    </h3>
                    <p>
                      Effective leadership and management are important factors
                      for jobseekers. They look for managers who provide clear
                      direction, support, and opportunities for growth.
                    </p>
                    <h3 className="text-heading-4 ">Stability and Security</h3>
                    <p>
                      Jobseekers seek job stability and long-term prospects.
                      They prefer employers with a solid track record of success
                      and financial stability.
                    </p>
                    <h3 className="text-heading-4 ">Diversity and Inclusion</h3>
                    <p>
                      Diversity and inclusion are important considerations for
                      jobseekers. They want to work for organizations that value
                      diversity, equity, and inclusion in their hiring practices
                      and workplace culture.
                    </p>
                    <h3 className="text-heading-4 ">
                      Opportunities for Remote Work
                    </h3>
                    <p>
                      With the rise of remote work, many jobseekers prioritize
                      opportunities for flexibility. They seek employers who
                      offer remote work options or flexible schedules.
                    </p>

                    <div className="row mt-45 mb-30">
                      <div className="col-lg-6">
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b12-s3.jpg"
                          alt="Agon"
                          height={465}
                          width={420}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="img-responsive mb-20"
                          src="assets/imgs/page/blog/single/b12-s4.png"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b12-s5.jpg"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                      </div>
                      <div className="caption-img mt-10 text-center color-gray-400">
                        furniture in your house
                      </div>
                    </div>
                    <p />
                    <h3 className="text-heading-3 mt-90">Conclusion</h3>
                    <p>
                      Understanding the jobseeker&#39;s wishlist is essential for
                      employers looking to attract and retain top talent. By
                      offering meaningful work, career growth opportunities,
                      competitive compensation, work-life balance, a positive
                      company culture, and other key factors, employers can
                      create an attractive workplace that appeals to jobseekers&#39;
                      needs and aspirations. By prioritizing these elements,
                      employers can position themselves as employers of choice
                      and build a strong and talented workforce for the future.
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
export default dynamic(() => Promise.resolve(BlogSingle12), { ssr: false });
