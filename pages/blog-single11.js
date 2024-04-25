/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";

function BlogSingle11() {
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
                    Leveraging Social Media for Recruiting
                    <br className="d-lg-block d-none" />
                    Finding the Right Talent Fit
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
                    Social media has revolutionized the way companies approach
                    recruiting by providing a powerful platform to connect with
                    potential candidates, showcase company culture, and attract
                    top talent. From LinkedIn to Twitter and beyond,
                    organizations are harnessing the power of social media to
                    identify and recruit candidates who not only possess the
                    right skills but also align with the company&#39;s values
                    and culture.
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
                      src="assets/imgs/page/blog/single/img-1.png"
                      alt="Agon"
                    />
                    <p />
                    <p>
                      Let&#39;s explore effective ways to improve your hiring
                      and recruitment process.
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
                      Benefits of Social Media in Recruitment
                    </span>
                    <h3 className="text-heading-4">Increased Visibility</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Social media platforms offer unparalleled reach and
                          visibility, allowing organizations to showcase job
                          opportunities to a vast audience. By posting job
                          openings on platforms like LinkedIn, Facebook, and
                          Twitter, companies can reach passive candidates who
                          may not actively be searching for job opportunities.
                        </p>
                        <h3 className="text-heading-4">
                          Building Employer Brand
                        </h3>
                        <p>
                          Social media provides a platform to showcase company
                          culture, values, and employer brand. Through engaging
                          content such as employee testimonials,
                          behind-the-scenes glimpses, and company events,
                          organizations can attract candidates who resonate with
                          their culture and mission.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/img-2.png"
                          alt="Agon"
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">Targeted Advertising</h3>
                    <p>
                      Social media advertising allows organizations to target
                      specific demographics, interests, and job titles, ensuring
                      job postings reach relevant candidates. Advanced targeting
                      options on platforms like LinkedIn enable recruiters to
                      tailor their ads to reach candidates with the desired
                      skills and experience.
                    </p>

                    <h3 className="text-heading-4">
                      Networking and Engagement
                    </h3>
                    <p>
                      Social media facilitates networking and engagement with
                      potential candidates, industry professionals, and thought
                      leaders. Participating in relevant groups, forums, and
                      discussions on platforms like LinkedIn enables recruiters
                      to build relationships and identify potential candidates
                      organically.
                    </p>
                    <h3 className="text-heading-4 ">
                      Showcasing Company Culture
                    </h3>
                    <p>
                      Social media platforms offer a platform to showcase the
                      company&#39;s culture, values, and workplace environment.
                      Sharing photos, videos, and stories about company events,
                      team outings, and employee achievements humanizes the
                      organization and attracts candidates who align with the
                      culture.
                    </p>
                    <h3 className="text-heading-4 ">Employee Referrals</h3>
                    <p>
                      Encouraging employees to share job openings on their
                      personal social networks can amplify reach and attract
                      referrals from their connections. Employee advocacy
                      programs and referral bonuses incentivize employees to
                      actively participate in the recruitment process.
                    </p>
                    <h3 className="text-heading-4 ">Real-time Engagement</h3>
                    <p>
                      Social media enables real-time communication and
                      engagement with candidates throughout the recruitment
                      process. Recruiters can respond to inquiries, schedule
                      interviews, and provide updates promptly, enhancing the
                      candidate experience.
                    </p>

                    <div className="row mt-45 mb-30">
                      <div className="col-lg-6">
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/img-3.png"
                          alt="Agon"
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="img-responsive mb-20"
                          src="assets/imgs/page/blog/single/img-4.png"
                          alt="Agon"
                        />
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/img-5.png"
                          alt="Agon"
                        />
                      </div>
                      <div className="caption-img mt-10 text-center color-gray-400">
                        furniture in your house
                      </div>
                    </div>
                    <p />
                    <h3 className="text-heading-3 mt-90">Conclusion</h3>
                    <p>
                      Social media has become an invaluable tool for recruiters
                      seeking to identify and recruit fit talent. By leveraging
                      social media platforms effectively, organizations can
                      increase visibility, build their employer brand, target
                      relevant candidates, and engage with potential hires in
                      meaningful ways. By incorporating social media into their
                      recruiting strategies, companies can attract top talent
                      and build high-performing teams that align with their
                      culture and values.
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
export default dynamic(() => Promise.resolve(BlogSingle11), { ssr: false });
