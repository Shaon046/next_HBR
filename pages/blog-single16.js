/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";

function BlogSingle16() {
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
                    The Cost of Bias
                    <br className="d-lg-block d-none" />
                    How Workplace Bias Impacts Business Performance
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
                    Workplace bias, whether conscious or unconscious, can have
                    significant repercussions on business performance, employee
                    morale, and organizational culture. From hindering diversity
                    and inclusion efforts to impeding decision-making and
                    innovation, bias undermines the success of companies in
                    various ways.
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
                      src="assets/imgs/page/blog/single/b16-s1.png"
                      alt="Agon"
                      width={900}
                      height={500}
                    />
                    <p />
                    <p>
                      Let&#39;s delve into the ways workplace bias impacts
                      businesses and explore strategies to mitigate its effects
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
                      Consequences of Workplace Bias
                    </span>
                    <h3 className="text-heading-4">
                      Hinders Diversity and Inclusion Efforts
                    </h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Workplace bias perpetuates systemic inequalities and
                          hampers efforts to foster diversity and inclusion.
                          Biased hiring practices, promotion decisions, and
                          workplace interactions can marginalize
                          underrepresented groups and hinder the creation of a
                          diverse workforce.
                        </p>
                        <h3 className="text-heading-4">
                          Impairs Decision-Making
                        </h3>
                        <p>
                          Bias clouds judgment and impairs decision-making
                          processes within organizations. Biased assumptions and
                          stereotypes may influence hiring decisions,
                          performance evaluations, and project assignments,
                          leading to suboptimal outcomes and missed
                          opportunities.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b16-s2.jpg"
                          alt="Agon"
                          height={360}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">
                      Undermines Employee Morale and Engagement
                    </h3>
                    <p>
                      Workplace bias erodes trust, morale, and engagement among
                      employees, particularly those who feel marginalized or
                      undervalued. Employees who perceive bias in the workplace
                      may experience decreased job satisfaction, higher turnover
                      rates, and lower levels of commitment to the organization.
                    </p>

                    <h3 className="text-heading-4">
                      Limits Innovation and Creativity
                    </h3>
                    <p>
                      Bias stifles innovation and creativity by discouraging
                      diverse perspectives and ideas. Employees who feel
                      excluded or marginalized are less likely to contribute
                      innovative solutions or challenge the status quo,
                      resulting in missed opportunities for growth and
                      innovation.
                    </p>
                    <h3 className="text-heading-4 ">
                      Increases Legal and Reputational Risks
                    </h3>
                    <p>
                      Workplace bias exposes companies to legal and reputational
                      risks, including discrimination lawsuits and damage to
                      brand reputation. Instances of bias, whether perceived or
                      actual, can tarnish a company&#39;s image and undermine
                      its credibility as an inclusive and socially responsible
                      employer.
                    </p>
                    <h3 className="text-heading-4 ">
                      Impacts Customer Relationships and Satisfaction
                    </h3>
                    <p>
                      Workplace bias exacts a toll on business performance,
                      notably impacting customer relationships and satisfaction.
                      Biased decision-making processes can lead to unequal
                      treatment and opportunities for customers, eroding trust
                      and loyalty. In an era where authenticity and inclusivity
                      are paramount, unchecked bias can tarnish a company&#39;s
                      reputation and hinder long-term success. Addressing bias
                      isn&#39;t just a moral obligation; it&#39;s a strategic
                      necessity for fostering enduring customer satisfaction and
                      relationships.
                    </p>
                    {/* <h3 className="text-heading-4 ">
                      Monitor and Address Employee Needs
                    </h3>
                    <p>
                      Regularly check in with employees to assess their
                      well-being and address any concerns or challenges they may
                      be facing. Be responsive to employee feedback and adapt
                      policies and practices to meet their evolving needs during
                      geopolitical turmoil.
                    </p> */}
                    <div className="row mt-45 mb-30">
                      <div className="col-lg-6">
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b16-s3.jpg"
                          alt="Agon"
                          height={465}
                          width={420}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="img-responsive mb-20"
                          src="assets/imgs/page/blog/single/b16-s4.jpg"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b16-s5.png"
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
                      In conclusion, the pervasive impact of workplace bias on
                      business performance is undeniable. From hindering
                      diversity and inclusion initiatives to impeding
                      decision-making, eroding employee morale, stifling
                      innovation, and increasing legal and reputational risks,
                      bias undermines the core foundations of organizational
                      success. However, by acknowledging the existence of bias,
                      implementing robust strategies for mitigation, and
                      fostering a culture of inclusivity and equity, businesses
                      can pave the way for a more resilient, innovative, and
                      thriving future. It is imperative for organizations to
                      prioritize addressing bias in all its forms to unlock the
                      full potential of their workforce and achieve sustainable
                      growth in an increasingly diverse and dynamic global
                      landscape
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
export default dynamic(() => Promise.resolve(BlogSingle16), { ssr: false });
