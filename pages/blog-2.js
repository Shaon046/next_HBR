/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Blog2() {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-breadcrums bg-gray-100">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="text-display-3 color-gray-900 mb-20">
                      Our Blog
                    </h1>
                    <p className="text-heading-6 color-gray-600 mb-20">
                      From year to year we strive to invent the most innovative
                      technology
                      <br className="d-lg-block d-none" />
                      that is used by both small enterprises and space
                      enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box">
            <div className="container mt-130">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Featured Articles
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    From Our Blog And Event Fanpage
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-90">
              <div className="row">
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img mb-20">
                      <Link href="/blog-single">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/1.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog-single">
                      <a className="text-heading-4">
                        HOW TO ADDRESS A GOOD TALENT IN YOUR ORGANIZATION
                      </a>
                    </Link>

                    <p className="text-body-text color-gray-500">
                      One of the most invaluable assets a company can possess is
                      its talent. Good talent drives innovation, fuels growth,
                      and fosters a positive work culture. It&#39;s the
                      lifeblood of any organization striving for success.
                    </p>
                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-1.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-heading-6 color-gray-900">
                        Jenny Wilson
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <div className="grid-4-img color-bg-2 mb-20">
                      <Link href="/blog-single2">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/2.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                    <Link href="/blog-single2">
                      <a className="text-heading-4">
                        Top-Notch Talent to Accelerate Your Organization
                      </a>
                    </Link>

                    <p className="text-body-text color-gray-500">
                      Today&#39;s competitive business landscape, having
                      top-notch talent is essential for driving innovation,
                      achieving growth, and staying ahead of the curve.
                      Developing and nurturing such talent is a strategic
                      imperative for businesses looking to thrive in dynamic
                      markets.
                    </p>
                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-2.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-heading-6 color-gray-900">
                        Jenny Wilson
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50 ">
                  <div className="card-list-style-1">
                    <Link href="/blog-single3">
                      <a className="text-heading-4">
                        HR KPIs to Prioritize Success in 2024
                      </a>
                    </Link>

                    {/* <div className="blog-img-user"> */}
                    {/* <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-3.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Jane Cooper
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p> */}
                    {/* </div> */}
                    <div className="style-1-img color-bg-6">
                      <Link href="/blog-single3">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/4.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1 mt-5">
                    <Link href="/blog-single4">
                      <a className="text-heading-4">
                        Adapting to AI, Uncertainty, and More
                      </a>
                    </Link>

                    {/* <div className="blog-img-user"> */}
                    {/* <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-4.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Wade Warren
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p> */}
                    {/* </div> */}
                    <div className="style-1-img color-bg-2 mt-3">
                      <Link href="/blog-single4">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/3.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1 ">
                    <Link href="/blog-single5">
                      <a className="text-heading-4">
                        Building Your Skills Strategy for Competitive Advantage
                      </a>
                    </Link>

                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-5.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Jenny Wilson
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                    <div className="style-1-img color-bg-5 mt-3">
                      <Link href="/blog-single5">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/6.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="card-list-style-1 ">
                    <Link href="/blog-single6">
                      <a className="text-heading-4">
                        Achieving Transparency and Managing Multi-<br></br>generational
                        Differences
                      </a>
                    </Link>

                    {/* <div className="blog-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src="/assets/imgs/page/blog/2/user-6.png"
                          alt="Agon"
                        />
                      </div>
                      <h4 className="text-body-lead color-gray-500">
                        Robert Fox
                      </h4>
                      <p className="text-body-small color-gray-500">
                        August 25, 2022
                      </p>
                    </div> */}
                    <div className="style-1-img color-bg-9">
                      <Link href="/blog-single6">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/5.png"
                            alt="Agon"
                          />
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
                <div className="col-lg-1 col-sm-1 col-12" />
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900 mb-10">
                    Latest News
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    From Our blog and Event fanpage
                  </p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-90">
              <div className="row">
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Company</span> */}
                    <Link href="/blog-single7">
                      <a className="text-heading-4">
                        Enhancing Your Hiring and Recruitment
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-9">
                      <Link href="/blog-single7">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/7.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Marketing Event</span> */}
                    <Link href="/blog-single8">
                      <a className="text-heading-4">
                        Leveraging Social Media for Recruiting
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-6">
                      <Link href="/blog-single8">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/8.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Customer Services</span> */}
                    <Link href="/blog-single9">
                      <a className="text-heading-4">
                        Streamlining the Talent Integration Process
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-4">
                      <Link href="/blog-single9">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/9.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Company</span> */}
                    <Link href="/blog-single10">
                      <a className="text-heading-4">
                        Strategies for Managing Attrition 09
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-2">
                      <Link href="/blog-single10">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/10.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Marketing Event</span> */}
                    <Link href="/blog-single12">
                      <a className="text-heading-4">
                        Understanding the Jobseeker&#39;s Wishlist
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-8">
                      <Link href="/blog-single12">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/11.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Customer Services</span> */}
                    <Link href="/blog-single13">
                      <a className="text-heading-4">
                        Mastering the Art of Employee Motivation
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-1">
                      <Link href="/blog-single13">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/12.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Company</span> */}
                    <Link href="/blog-single14">
                      <a className="text-heading-4">
                        Managing Employees During Times of Crisis
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-2">
                      <Link href="/blog-single14">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/13.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Marketing Event</span> */}
                    <Link href="/blog-single15">
                      <a className="text-heading-4">
                        Building Skills for AI Literacy and Beyond
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-8">
                      <Link href="/blog-single15">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/14.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    {/* <span className="tag-dot">Customer Services</span> */}
                    <Link href="/blog-single16">
                      <a className="text-heading-4">
                        Workplace Bias Impacts Business Performance
                      </a>
                    </Link>

                    <div className="grid-4-img color-bg-1">
                      <Link href="/blog-single16">
                        <a>
                          <img
                            src="/assets/imgs/page/blog/2/15.png"
                            alt="Agon"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-20 mb-30 text-center">
                <Link href="/blog-1">
                  <a className="btn btn-black icon-arrow-right-white">
                    Load more posts
                  </a>
                </Link>
              </div> */}
            </div>
          </section>
          {/* <section className="section-box overflow-visible mb-100">
            <div className="container mt-100">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="bg-2 box-newsletter position-relative">
                    <div className="row">
                      <div className="col-lg-5 col-md-7">
                        <span className="text-body-capitalized color-gray-500 text-uppercase">
                          newsletter
                        </span>
                        <h4 className="text-heading-2 mb-10 mt-10">
                          Subscribe our newsletter
                        </h4>
                        <p className="text-body-text color-gray-500">
                          By clicking the button, you are agreeing with our
                        </p>
                        <Link href="/page-terms">
                          <a>Term &amp; Conditions</a>
                        </Link>

                        <div className="box-form-newsletter mt-30">
                          <form className="form-newsletter">
                            <input
                              className="input-newsletter"
                              placeholder="Enter you mail .."
                            />
                            <button className="btn btn-send" />
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                        <div className="block-chart shape-1">
                          <img
                            src="/assets/imgs/template/chart.png"
                            alt="Agon"
                          />
                        </div>
                        <img
                          className="img-responsive img-newsletter"
                          src="assets/imgs/template/img-newsletter.png"
                          alt="Agon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    </>
  );
}

export default Blog2;
