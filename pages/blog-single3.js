/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";

function BlogSingle3() {
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
                    HR KPIs to Prioritize Success
                    <br className="d-lg-block d-none" />
                    in 2024
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
                    In the dynamic landscape of 2024, HR departments are at the
                    forefront of driving organizational success through
                    strategic workforce management. With the rapid pace of
                    change in technology, market demands, and workplace
                    dynamics, HR professionals must utilize Key Performance
                    Indicators (KPIs) to navigate these complexities
                    effectively.
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
                      src="assets/imgs/page/blog/single/b3-s1.png"
                      alt="Agon"
                      width={900}
                      height={500}
                    />
                    <p />
                    {/* <p>
                      Attracting and retaining good talent requires more than
                      just offering competitive salaries and benefits. It
                      demands a commitment to creating an environment where
                      talent can thrive, grow, and feel valued.
                    </p> */}
                    {/* <h2 className="text-heading-3 ">
                      Recognizing and Addressing Good Talent
                    </h2>
                    <p>
                      Identifying good talent within your company is the first
                      step towards nurturing it. These individuals exhibit
                      exceptional skills, dedication, and potential for growth.
                      They are the ones who consistently go above and beyond,
                      contribute innovative ideas, and demonstrate leadership
                      qualities. Whether they&#39;re top performers in their
                      respective roles or emerging stars with untapped
                      potential, recognizing their contributions is crucial.
                    </p>
                    <p /> */}
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
                      Employee Performance KPIs
                    </span>
                    <h3 className="text-heading-4">Productivity</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Measure the output generated by employees within
                          specific roles or departments over time. This KPI
                          helps HR identify high-performing individuals and
                          areas where productivity enhancements may be
                          necessary.
                        </p>
                        <h3 className="text-heading-4">Employee Engagement</h3>
                        <p>
                          Gauge the level of employee satisfaction, motivation,
                          and commitment to the organization. Higher engagement
                          levels correlate with increased productivity, lower
                          turnover rates, and better overall organizational
                          performance.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b3-s2.jpg"
                          alt="Agon"
                          height={330}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">Turnover Rate</h3>
                    <p>
                      Monitor the percentage of employees leaving the
                      organization within a given period. High turnover rates
                      can signal underlying issues such as dissatisfaction, poor
                      leadership, or inadequate career development
                      opportunities.
                    </p>
                    <h3 className="text-heading-4">
                      Training and Development Participation
                    </h3>
                    <p>
                      Track employee participation in training and development
                      programs. This KPI assesses the effectiveness of HR
                      initiatives aimed at enhancing employee skills and
                      competencies.
                    </p>
                    <h3 className="text-heading-4">
                      Diversity and Inclusion Metrics:
                    </h3>
                    <p>
                      Measure the representation of diverse groups within the
                      workforce and assess the inclusivity of organizational
                      policies and practices. A diverse and inclusive workplace
                      fosters innovation, creativity, and better
                      decision-making.
                    </p>
                    {/* <h3 className="text-heading-4">
                      Compensation and Benefits
                    </h3>
                    <p>
                      Good talent thrives in an environment where collaboration
                      While competitive compensation is important, it&#39;s not
                      the sole motivator for good talent. Ensure that your
                      compensation and benefits package is fair and reflective
                      of their contributions. Consider non-monetary rewards such
                      as extra vacation days, performance bonuses, or
                      personalized perks tailored to their interests.
                    </p>
                    <h3 className="text-heading-4">
                      Opportunities for Advancement
                    </h3>
                    <p>
                      Good talent is ambitious and seeks opportunities for
                      career advancement. Provide clear pathways for growth
                      within the organization, whether it&#39;s through
                      promotions, lateral moves, or special projects. Offer
                      regular performance evaluations and constructive feedback
                      to help them progress in their careers.
                    </p>
                    <h3 className="text-heading-4">
                      Celebrate Milestones and Achievements
                    </h3>
                    <p>
                      Whether it&#39;s reaching sales targets, completing a
                      challenging project, or years of service, celebrate
                      milestones and achievements as a team. Host recognition
                      events, award ceremonies, or social gatherings to show
                      appreciation for their hard work and dedication.
                    </p>
                    <h3 className="text-heading-4">Lead by Example</h3>
                    <p>
                      Leadership plays a crucial role in shaping the company
                      culture and fostering talent development. Lead by example
                      by demonstrating integrity, humility, and a commitment to
                      continuous improvement. Be accessible, approachable, and
                      supportive of your team members&#39; growth and
                      development.
                    </p>
                    <h3 className="text-heading-4">
                      Solicit Feedback and Act on It
                    </h3>
                    <p>
                      Encourage open communication by soliciting feedback from
                      your employees regularly. Act on their suggestions and
                      address any concerns or challenges they may face.
                    </p> */}

                    <span className="tag-1 bg-5 color-green-900 mt-40 mb-30">
                      Recruitment and Talent Acquisition KPIs
                    </span>

                    <div className="row">
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b3-s3.png"
                          alt="Agon"
                          height={330}
                        />
                      </div>
                      <div className="col-lg-8">
                        <h3 className="text-heading-4">Time-to-Fill</h3>
                        <p>
                          Evaluate the average time taken to fill vacant
                          positions within the organization. A prolonged
                          time-to-fill metric may indicate inefficiencies in the
                          recruitment process or challenges in attracting
                          qualified candidates.
                        </p>
                        <h3 className="text-heading-4">Cost-per-Hire</h3>
                        <p>
                          Calculate the total cost incurred to recruit and
                          onboard new employees. This KPI helps HR optimize
                          recruitment budgets and identify cost-effective
                          sourcing channels.
                        </p>
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4 mt-40">Quality of Hire</h3>
                    <p>
                      Assess the performance and contribution of new hires
                      compared to established benchmarks. This KPI provides
                      insights into the effectiveness of recruitment strategies
                      in identifying top talent.eness of recruitment strategies
                      in identifying top talent.
                    </p>
                    <h3 className="text-heading-4 ">Candidate Satisfaction</h3>
                    <p>
                      Measure the satisfaction levels of job applicants
                      throughout the recruitment process. Positive candidate
                      experiences enhance employer branding and attract top
                      talent to the organization.
                    </p>
                    <h3 className="text-heading-4">
                      Recruitment Channel Effectiveness
                    </h3>
                    <p>
                      Evaluate the performance of different recruitment channels
                      such as job boards, employee referrals, and social media
                      platforms. This KPI informs HR decisions on resource
                      allocation and investment in recruitment strategies.
                    </p>
                    {/* <h3 className="text-heading-4">
                      Compensation and Benefits
                    </h3>
                    <p>
                      Good talent thrives in an environment where collaboration
                      While competitive compensation is important, it&#39;s not
                      the sole motivator for good talent. Ensure that your
                      compensation and benefits package is fair and reflective
                      of their contributions. Consider non-monetary rewards such
                      as extra vacation days, performance bonuses, or
                      personalized perks tailored to their interests.
                    </p>
                    <h3 className="text-heading-4">
                      Opportunities for Advancement
                    </h3>
                    <p>
                      Good talent is ambitious and seeks opportunities for
                      career advancement. Provide clear pathways for growth
                      within the organization, whether it&#39;s through
                      promotions, lateral moves, or special projects. Offer
                      regular performance evaluations and constructive feedback
                      to help them progress in their careers.
                    </p>
                    <h3 className="text-heading-4">
                      Celebrate Milestones and Achievements
                    </h3>
                    <p>
                      Whether it&#39;s reaching sales targets, completing a
                      challenging project, or years of service, celebrate
                      milestones and achievements as a team. Host recognition
                      events, award ceremonies, or social gatherings to show
                      appreciation for their hard work and dedication.
                    </p>
                    <h3 className="text-heading-4">Lead by Example</h3>
                    <p>
                      Leadership plays a crucial role in shaping the company
                      culture and fostering talent development. Lead by example
                      by demonstrating integrity, humility, and a commitment to
                      continuous improvement. Be accessible, approachable, and
                      supportive of your team members&#39; growth and
                      development.
                    </p>
                    <h3 className="text-heading-4">
                      Solicit Feedback and Act on It
                    </h3>
                    <p>
                      Encourage open communication by soliciting feedback from
                      your employees regularly. Act on their suggestions and
                      address any concerns or challenges they may face.
                    </p> */}

                    <span className="tag-1 bg-5 color-green-900 mt-40 mb-30">
                      Employee Retention and Satisfaction KPIs
                    </span>
                    <h3 className="text-heading-4">
                      Employee Satisfaction Surveys
                    </h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Conduct regular surveys to measure employee
                          satisfaction levels across various aspects of the
                          workplace, including compensation, benefits, career
                          development, and work-life balance.
                        </p>
                        <h3 className="text-heading-4">Turnover Cost</h3>
                        <p>
                          Estimate the financial impact of employee turnover on
                          the organization, including recruitment costs, lost
                          productivity, and training expenses for replacement
                          hires.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b3-s4.png"
                          alt="Agon"
                          height={300}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">Turnover Rate</h3>
                    <p>
                      Monitor the percentage of employees leaving the
                      organization within a given period. High turnover rates
                      can signal underlying issues such as dissatisfaction, poor
                      leadership, or inadequate career development
                      opportunities.
                    </p>
                    <h3 className="text-heading-4">
                      Employee Net Promoter Score (eNPS)
                    </h3>
                    <p>
                      Measure employees&#39; likelihood to recommend the
                      organization as a place to work. A high eNPS indicates
                      strong employee advocacy and positive employer branding.
                    </p>
                    <h3 className="text-heading-4">
                      Workforce Diversity Metrics
                    </h3>
                    <p>
                      Track the representation of diverse groups within
                      different levels of the organization, including gender,
                      ethnicity, age, and disability status. This KPI ensures
                      inclusivity and equal opportunities for all employees.
                    </p>
                    <h3 className="text-heading-4">
                      Employee Wellness Program Participation:
                    </h3>
                    <p>
                      Monitor employee participation in wellness initiatives
                      such as fitness programs, mental health support services,
                      and work-life balance workshops.
                    </p>
                    {/* <h3 className="text-heading-4">
                      Opportunities for Advancement
                    </h3>
                    <p>
                      Good talent is ambitious and seeks opportunities for
                      career advancement. Provide clear pathways for growth
                      within the organization, whether it&#39;s through
                      promotions, lateral moves, or special projects. Offer
                      regular performance evaluations and constructive feedback
                      to help them progress in their careers.
                    </p>
                    <h3 className="text-heading-4">
                      Celebrate Milestones and Achievements
                    </h3>
                    <p>
                      Whether it&#39;s reaching sales targets, completing a
                      challenging project, or years of service, celebrate
                      milestones and achievements as a team. Host recognition
                      events, award ceremonies, or social gatherings to show
                      appreciation for their hard work and dedication.
                    </p>
                    <h3 className="text-heading-4">Lead by Example</h3>
                    <p>
                      Leadership plays a crucial role in shaping the company
                      culture and fostering talent development. Lead by example
                      by demonstrating integrity, humility, and a commitment to
                      continuous improvement. Be accessible, approachable, and
                      supportive of your team members&#39; growth and
                      development.
                    </p>
                    <h3 className="text-heading-4">
                      Solicit Feedback and Act on It
                    </h3>
                    <p>
                      Encourage open communication by soliciting feedback from
                      your employees regularly. Act on their suggestions and
                      address any concerns or challenges they may face.
                    </p> */}

                    <span className="tag-1 bg-5 color-green-900 mt-40 mb-30">
                      Learning and Development KPIs:
                    </span>

                    <div className="row">
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b3-s5.jpg"
                          alt="Agon"
                          height={330}
                        />
                      </div>
                      <div className="col-lg-8">
                        <h3 className="text-heading-4">
                          Training Effectiveness
                        </h3>
                        <p>
                          Measure the impact of training programs on employee
                          performance, skill development, and job satisfaction.
                          This KPI helps HR assess the ROI of learning
                          initiatives and tailor training content to meet
                          organizational needs.
                        </p>
                        <h3 className="text-heading-4">Skills Gap Analysis</h3>
                        <p>
                          Identify gaps between the skills required for job
                          roles and the skills possessed by employees. This KPI
                          informs HR strategies for talent development,
                          succession planning, and recruitment.
                        </p>
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4 mt-40">
                      Training Completion Rates
                    </h3>
                    <p>
                      Track the percentage of employees who successfully
                      complete training programs within the stipulated
                      timeframe. High completion rates indicate employee
                      engagement and commitment to continuous learning.
                    </p>
                    <h3 className="text-heading-4 ">
                      Learning Engagement Scores
                    </h3>
                    <p>
                      Evaluate employees&#39; level of engagement and
                      satisfaction with learning and development opportunities.
                      This KPI provides insights into the effectiveness of
                      training delivery methods and content relevance.
                    </p>
                    <h3 className="text-heading-4">
                      Certification and Credential Attainment
                    </h3>
                    <p>
                      Monitor the attainment of industry certifications,
                      licenses, and professional credentials by employees. This
                      KPI demonstrates the organization&#39;s investment in
                      employee development and skill enhancement.
                    </p>
                    {/* <h3 className="text-heading-4">
                      Compensation and Benefits
                    </h3>
                    <p>
                      Good talent thrives in an environment where collaboration
                      While competitive compensation is important, it&#39;s not
                      the sole motivator for good talent. Ensure that your
                      compensation and benefits package is fair and reflective
                      of their contributions. Consider non-monetary rewards such
                      as extra vacation days, performance bonuses, or
                      personalized perks tailored to their interests.
                    </p>
                    <h3 className="text-heading-4">
                      Opportunities for Advancement
                    </h3>
                    <p>
                      Good talent is ambitious and seeks opportunities for
                      career advancement. Provide clear pathways for growth
                      within the organization, whether it&#39;s through
                      promotions, lateral moves, or special projects. Offer
                      regular performance evaluations and constructive feedback
                      to help them progress in their careers.
                    </p>
                    <h3 className="text-heading-4">
                      Celebrate Milestones and Achievements
                    </h3>
                    <p>
                      Whether it&#39;s reaching sales targets, completing a
                      challenging project, or years of service, celebrate
                      milestones and achievements as a team. Host recognition
                      events, award ceremonies, or social gatherings to show
                      appreciation for their hard work and dedication.
                    </p>
                    <h3 className="text-heading-4">Lead by Example</h3>
                    <p>
                      Leadership plays a crucial role in shaping the company
                      culture and fostering talent development. Lead by example
                      by demonstrating integrity, humility, and a commitment to
                      continuous improvement. Be accessible, approachable, and
                      supportive of your team members&#39; growth and
                      development.
                    </p>
                    <h3 className="text-heading-4">
                      Solicit Feedback and Act on It
                    </h3>
                    <p>
                      Encourage open communication by soliciting feedback from
                      your employees regularly. Act on their suggestions and
                      address any concerns or challenges they may face.
                    </p> */}

                    <span className="tag-1 bg-5 color-green-900 mt-40 mb-30">
                      HR Operational Efficiency KPIs
                    </span>
                    <h3 className="text-heading-4">
                      HR Service Delivery Metrics
                    </h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Measure the efficiency and effectiveness of HR service
                          delivery processes such as payroll administration,
                          benefits management, and employee inquiries handling.
                        </p>
                        <h3 className="text-heading-4">
                          HR Technology Utilization
                        </h3>
                        <p>
                          Assess the utilization and adoption rates of HR
                          technology systems such as HRIS, ATS, and performance
                          management platforms. This KPI identifies areas for
                          system optimization and user training.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 "
                          src="assets/imgs/page/blog/single/b3-s6.jpg"
                          alt="Agon"
                          height={300}
                        />
                      </div>
                    </div>
                    {/* <p /> */}
                    <h3 className="text-heading-4">
                      HR Compliance and Regulatory Adherence
                    </h3>
                    <p>
                      Monitor HR compliance with labor laws, regulations, and
                      industry standards. This KPI mitigates legal risks and
                      ensures adherence to ethical and professional HR
                      practices.
                    </p>
                    <h3 className="text-heading-4">HR Budget Variance</h3>
                    <p>
                      Track the implementation of HR process improvement
                      projects aimed at streamlining workflows, enhancing
                      efficiency, and delivering greater value to stakeholders.
                    </p>
                    {/* <h3 className="text-heading-4">
                      HR Process Improvement Initiatives
                    </h3>
                    <p>
                      Track the representation of diverse groups within
                      different levels of the organization, including gender,
                      ethnicity, age, and disability status. This KPI ensures
                      inclusivity and equal opportunities for all employees.
                    </p>
                    <h3 className="text-heading-4">
                      Employee Wellness Program Participation:
                    </h3>
                    <p>
                      Monitor employee participation in wellness initiatives
                      such as fitness programs, mental health support services,
                      and work-life balance workshops.
                    </p>
                     <h3 className="text-heading-4">
                      Opportunities for Advancement
                    </h3>
                    <p>
                      Good talent is ambitious and seeks opportunities for
                      career advancement. Provide clear pathways for growth
                      within the organization, whether it&#39;s through
                      promotions, lateral moves, or special projects. Offer
                      regular performance evaluations and constructive feedback
                      to help them progress in their careers.
                    </p>
                    <h3 className="text-heading-4">
                      Celebrate Milestones and Achievements
                    </h3>
                    <p>
                      Whether it&#39;s reaching sales targets, completing a
                      challenging project, or years of service, celebrate
                      milestones and achievements as a team. Host recognition
                      events, award ceremonies, or social gatherings to show
                      appreciation for their hard work and dedication.
                    </p>
                    <h3 className="text-heading-4">Lead by Example</h3>
                    <p>
                      Leadership plays a crucial role in shaping the company
                      culture and fostering talent development. Lead by example
                      by demonstrating integrity, humility, and a commitment to
                      continuous improvement. Be accessible, approachable, and
                      supportive of your team members&#39; growth and
                      development.
                    </p>
                    <h3 className="text-heading-4">
                      Solicit Feedback and Act on It
                    </h3>
                    <p>
                      Encourage open communication by soliciting feedback from
                      your employees regularly. Act on their suggestions and
                      address any concerns or challenges they may face.
                    </p> */}

                    <p />
                    <div className="row mt-45 mb-30">
                      <div className="col-lg-6">
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b3-s8.png"
                          alt="Agon"
                          height={465}
                          width={420}
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          className="img-responsive mb-20"
                          src="assets/imgs/page/blog/single/b3-s7.png"
                          alt="Agon"
                          height={220}
                          width={450}
                        />
                        <img
                          className="img-responsive"
                          src="assets/imgs/page/blog/single/b3-s9.png"
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
                      HR KPIs are instrumental in driving organizational success
                      in 2024 by providing actionable insights into workforce
                      performance, recruitment effectiveness, employee
                      engagement, learning and development, and HR operational
                      efficiency. By strategically leveraging these KPIs, HR
                      professionals can align HR initiatives with business
                      objectives, optimize resource allocation, and foster a
                      high-performance workplace culture.
                    </p>
                    {/* <div className="border-bottom mt-50 mb-50" /> */}
                    {/* <div>
                      <Link href="/blog-1">
                        <a className="btn btn-tag mr-10">Nature</a>
                      </Link>
                      <Link href="/blog-2">
                        <a className="btn btn-tag mr-10">Beauty</a>
                      </Link>
                      <Link href="/blog-1">
                        <a className="btn btn-tag mr-10">Travel tips</a>
                      </Link>
                      <Link href="/blog-2">
                        <a className="btn btn-tag">Houes</a>
                      </Link>
                    </div> */}
                  </div>
                  {/* <div className="mt-60">
                    <h4 className="text-heading-2">Comments</h4>
                    <div className="box-comments">
                      <ul>
                        <li>
                          <div className="item-comment">
                            <div className="blog-img-user">
                              <div className="img-user img-user-round">
                                <img
                                  src="/assets/imgs/page/blog/single/user-1.png"
                                  alt="Agon"
                                />
                              </div>
                              <h4 className="text-heading-6 color-gray-900">
                                Robert Fox
                              </h4>
                              <p className="text-body-small color-gray-500">
                                August 25, 2022
                              </p>
                            </div>
                            <div className="text-comment">
                              White white dreamy drama tically place everything
                              although. Place out apartment afternoon whimsical
                              kinder, little romantic joy we flowers handmade.
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="item-comment">
                            <div className="blog-img-user">
                              <div className="img-user img-user-round">
                                <img
                                  src="/assets/imgs/page/blog/single/user-2.png"
                                  alt="Agon"
                                />
                              </div>
                              <h4 className="text-heading-6 color-gray-900">
                                Robert Fox
                              </h4>
                              <p className="text-body-small color-gray-500">
                                August 25, 2022
                              </p>
                            </div>
                            <div className="text-comment">
                              White white dreamy drama tically place everything
                              although. Place out apartment afternoon whimsical
                              kinder, little romantic joy we flowers handmade.
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="item-comment">
                                <div className="blog-img-user">
                                  <div className="img-user img-user-round">
                                    <img
                                      src="/assets/imgs/page/blog/single/user-3.png"
                                      alt="Agon"
                                    />
                                  </div>
                                  <h4 className="text-heading-6 color-gray-900">
                                    Robert Fox
                                  </h4>
                                  <p className="text-body-small color-gray-500">
                                    August 25, 2022
                                  </p>
                                </div>
                                <div className="text-comment">
                                  White white dreamy drama tically place
                                  everything although. Place out apartment
                                  afternoon whimsical kinder, little romantic
                                  joy we flowers handmade.
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="border-bottom mt-50 mb-50" />
                    <h4 className="text-heading-4 color-gray-900 mb-40">
                      Leave a comment
                    </h4>
                    <div className="form-comment">
                      <form action="#">
                        <div className="form-group">
                          <textarea
                            className="input-comment"
                            placeholder="Write a comment"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-6 col-sm-7 mb-30">
                            <label className="box-agree">
                              <input
                                className="chkbox-aggree"
                                type="checkbox"
                              />
                              <span className="text-body-text-md color-gray-1200">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </span>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-6 col-sm-5 text-end">
                            <button className="btn btn-black shape-square btn-md text-body-text">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}
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
export default dynamic(() => Promise.resolve(BlogSingle3), { ssr: false });
