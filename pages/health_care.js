/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";


function Healthcare() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 mt-50">
                                        <span className="tag-1 bg-green-900">Wondering how we find the best talent in the Healthcare sector? </span>
                                        <h1 className="text-display-3 mt-30">
                                            Unveiling Healthcare Excellence: Explore Our Talent Acquisition Solutions 
                                        </h1>
                                        <p className="text-body-lead color-gray-500 mt-40 pr-40" style={{ fontSize: "18px" }}>
                                            Dive into our innovative approach to sourcing top talent in the Healthcare industry. Discover how we leverage our extensive network and specialized expertise to connect exceptional candidates with rewarding healthcare opportunities.
                                        </p>
                                        <div className="mt-40">
                                        <Link href="/page-contact"><a className="btn btn-black shape-square icon-arrow-right-white">Find Talent
                                            </a></Link>
                                            <Link href="/page-about-2"><a className="btn btn-link icon-triangle color-gray-900 ml-40">Find Job
                                            </a></Link>

                                        </div>
                                        <div className="mt-50">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        +<span className="count">38</span>k
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Happy Clients
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        +<span className="count">45</span>k
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Project Done
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">100</span>%
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Client Satisfaction
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <div className="banner-imgs">
                                            {/* <div className="block-1 shape-2">
                                                <img src="/assets/imgs/page/homepage2/balance.png" alt="Agon" />
                                            </div>
                                            <div className="block-2 shape-3">
                                                <img src="/assets/imgs/page/homepage2/payment.png" alt="Agon" />
                                            </div> */}
                                            <img className="img-responsive shape-1" style={{borderRadius:"30px"}} alt="Agon" src="assets/imgs/page/homepage2/health.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <div className="section-box overflow-visible mt-80">
                        <div className="container">
                            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                                Trusted by the world’s leading companies
                            </h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="list-partners">
                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-7.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-8.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-9.svg" />
                                            </a></Link>
                                        </li>                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <section className="section-box">
                        <div className="container mt-120">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 block-img-we-do">
                                    <div className="inner-image">
                                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/health2.png" alt="Agon" />
                                        {/* <div className="block-chart">
                                            <img src="/assets/imgs/page/homepage2/chart.png" alt="Agon" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do-2">
                                    <span className="tag-1 bg-6 color-green-900">The HBR Advantage</span>
                                    <h3 className="text-heading-2 mt-30">
                                        Optimizing Healthcare Recruitment Process 
                                    </h3>
                                    <p className="text-body-lead color-gray-600 mt-30" style={{ fontSize: "18px" }}>
                                        Learn about our streamlined recruitment process tailored specifically for the Healthcare sector. Our multi-phased approach, combined with advanced technology, ensures efficient and effective recruitment outcomes.
                                    </p>
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Precision Shortlisting
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                            Leveraging advanced algorithms and data analytics to identify the most qualified healthcare professionals from a vast talent pool.
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-design.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Comprehensive Assessment
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Conducting thorough evaluations to assess candidates&#39; clinical skills, patient care abilities, and cultural fit.
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-advance.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Customized Evaluation
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Collaborating closely with clients to understand their unique healthcare staffing needs and deliver tailored recruitment solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-2 col-12" />
                                <div className="col-lg-9 col-sm-11 col-12 text-center mt-40">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Cultivating Strategic Partnerships in Healthcare Recruitment  
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        Explore our client-centric approach to Healthcare recruitment, where we prioritize building long-term partnerships and delivering customized solutions to address our clients&#39; specific needs. 
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-90 mb-lg-100">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-2 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Client-Centric Solutions
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Working closely with clients to gain insights into their healthcare staffing challenges and develop personalized recruitment strategies.
                                        </p>
                                        <div className="box-image-inner bg-color-1">
                                            <img style={{borderRadius:"15px"}} src="/assets/imgs/page/homepage2/health3.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-6 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Focused on Client Success
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Going beyond traditional recruitment methods to deliver results that support our clients&#39; success and enhance patient care delivery.
                                        </p>
                                        <div className="box-image-inner bg-color-2">
                                            <img style={{borderRadius:"15px"}} src="/assets/imgs/page/homepage2/health4.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-lg-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Expertise in Recruiting Healthcare Professionals 
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        Discover our specialized expertise in recruiting healthcare professionals to drive excellence and innovation in patient care. With a focus on compassion and quality, we identify and nurture talent that positively impacts healthcare organizations. 
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70"  >
                            <div className="row gap-5" style={{ display: "flex", justifyContent: "center", }} >
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon" >
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Embracing Clinical Excellence
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                 Identifying and cultivating IT professionals who possess the latest technical skills and a passion for innovation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4" >
                                                Supporting Healthcare Advancement
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Partnering with clients to build skilled and compassionate healthcare teams that advance medical knowledge and improve patient outcomes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">3. Retention</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia
                                                deserunt mollit laborum — semper
                                                quis lectus nulla.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container mt-80">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <span className="tag-1 bg-6 color-green-900">Ready to elevate your healthcare team to new heights?</span>
                                    <h3 className="text-heading-1 mt-30">
                                        Partner with HBR for Healthcare Recruitment Excellence 
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        Let&#39;s collaborate to build a high-performing healthcare team that delivers exceptional patient care. From recruitment to retention, we&#39;ll guide you through every step of the staffing process. 
                                    </p>
                                    <div className="line-bd-green mt-50" />
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Connect with Us
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Fill out the form below to connect with our healthcare recruitment specialists and discuss your staffing needs.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Tailored Solutions
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Schedule a consultation to explore customized recruitment solutions designed to meet your organization&#39;s unique healthcare staffing requirements.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Embark on Your Recruitment Journey
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Partner with HBR to build a skilled and compassionate healthcare team that enhances patient care delivery and drives organizational success.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Experience the HBR Difference
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Discover why leading healthcare organizations trust HBR for recruitment excellence and join them in shaping the future of healthcare.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do">
                                    <div className="inner-image">
                                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/health5.png" alt="Agon" />
                                        {/* <div className="block-image-bottom">
                                            <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="section-box">
                        <div className="container mt-120">
                            <div className="bdrd-58 box-gray-100">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-1 col-12" />
                                    <div className="col-lg-8 col-sm-10 col-12 text-center">
                                        <h2 className="text-heading-1 color-gray-900 mt-30">
                                            Our Happy Customers
                                        </h2>
                                        <p className="text-body-lead-large color-gray-600 mt-20">
                                            Know about our clients, we are a woldwide
                                            corporate brand
                                        </p>
                                    </div>
                                    <div className="col-lg-2 col-sm-1 col-12" />
                                </div>
                                <div className="container mt-70">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    Satisfied client testimonial
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    Even factoring differences in body
                                                    weight between children and adults
                                                    into account, it would still not
                                                    reach an intoxicating level in
                                                    children.
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Jane Cooper
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Biffco Enterprises Ltd.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    98% of residents recommend us
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    So yes, the alcohol (ethanol) in
                                                    hand sanitizers can be absorbed
                                                    through the skin, but no, it would
                                                    not cause intoxication.
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-2.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Wade Warren
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Krusty Krab
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    Our success stories
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    “It has been an absolute
                                                    pleasure dealing with Scan during
                                                    the lockdown. Our church began to
                                                    livestream our services, and Scan
                                                    had a great selection of
                                                    hardware....”
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-3.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Leslie Alexander
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Biffco Enterprises Ltd.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    This is simply unbelievable
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    “I was also lucky enough to
                                                    read @Coding_Career early and I was
                                                    thoroughly blown away! It’s
                                                    the book I wish I had when I started
                                                    my dev career.”
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-4.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Jenny Wilson
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Soylent Corp
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container mt-50">
                            <h3 className="text-heading-1 text-center mb-10">
                                Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                            </h3>
                        </div>
                        <PriceTable />
                    </section>
                    <section className="section-box overflow-visible mb-100">
                        <div className="container mt-100">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="bg-6 box-newsletter position-relative">
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

                                                <Link href="/page-terms"><a>Term &amp; Conditions
                                                </a></Link>

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
                    </section> */}
                </div>

            </Layout>

        </>
    )
}


export default dynamic (() => Promise.resolve(Healthcare), {ssr: false})