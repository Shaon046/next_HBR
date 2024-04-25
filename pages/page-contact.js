import { useEffect, useState } from "react";
import Layout1 from "../components/layout/Layout1";
import dynamic from "next/dynamic";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import axios from "axios";
import Header from "../components/layout/Header";





// const initValues = {
//     firstName: "",
//     lastName: "",
//     company: "",
//     businessMail: "",
//     phoneNumber: "",
//     designation: "",
//     solution: "",
//     requirment: "",

// }

// const initState = { values: initValues }


function Contact() {

    const [state, setstate] = useState("")


    useEffect(() => {
        console.log(state)
    }, [state])


    const handleChange = ({ target }) => {
        setstate(prevState => ({
            ...prevState,
            [target.name]: target.value, // Assuming target.fullName is the name of the input field and target.state is the value
        }));
    };

    const onsubmit = async () => {
        console.log("I am value :  ", state);
        setstate((prev) => ({
            ...prev,
            isLoading: true
        }));
    
        // await sendContactForm(state);
    
        try {
            const response = await axios.post('/api/hello', state);
            console.log('Response:', response.data);
           
            // Handle response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    

    

    // const makeApiCall= async() =>{
    //     await fetch("/api/hello", {
    //         method:"POST",
    //         body:JSON>stringify({state}),
    //     })
    // }



    return (
        <>
           <Layout1>
           
           
           
                {/* <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                            <p className="text-body-text color-gray-500">Have a project in mind?<br className="d-lg-block d-none" />Fill out the form!</p>
                        </div>
                    </div>
                </section> */}
                <section className="section-box">
                    <div className="container mb-20 mt-50">
                        <div className="bdrd-58 box-gray-100 "  style={{backgroundColor:"rgb(190, 225, 230)"}}>
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Start your talent journey today.</span>
                                    <h2 className="text-heading-4 color-gray-900 mt-10">Ready to build your dream team?<br></br>
                                        How can HBR elevate your recruitment experience today?
                                    </h2>
                                    <p className="text-body-text color-gray-600 mt-20">Let&#39;s craft your dream team together.<br className="d-lg-block d-none" />Share your needs, and our expert recruiters will connect you with top talent.<br></br> Fill out our quick inquiry form, and we&#39;ll be in touch soon!</p>
                                </div>
                                {/* <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Human Before Resource</h4>
                                    <p className="text-body-text color-gray-600">8th Floor, DN-2 Signet Tower<br />College More Dn Block Unit 804</p>
                                    <p className="text-body-text color-gray-600">Sector V, Saltlake, Kolkata</p>
                                    <p className="text-body-text color-gray-600">West Bengal 700091</p>
                                    <p className="text-body-text color-gray-600">09674757948</p>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" name="firstName" value={state.firstName} placeholder="First Name"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" name="lastName" value={state.lastName} placeholder="Last Name"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" name="company" value={state.company} placeholder="Company"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="businessMail" value={state.businessMail} placeholder="Business Email"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" name="phoneNumber" value={state.phoneNumber} placeholder="Phone number"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" name="designation" value={state.designation} placeholder=" Designation"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <select className="form-select" name="solution" value={state.solution}
                                                    onChange={handleChange} required>
                                                    <option selected disabled value="">Solutions...</option>
                                                    <option>Permanent Staffing</option>
                                                    <option>Temporary Staffing</option>
                                                    <option>In-house Staffing</option>
                                                    <option>Payroll Process</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="requirment" value={state.requirment} placeholder="Your Requirement"
                                                    onChange={handleChange} />
                                            </div>
                                        </div>



                                        <div className="col-lg-12 mt-15" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                                            <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit" 
                                                disabled={!state.firstName || !state.lastName || !state.phoneNumber || !state.designation || !state.businessMail || !state.company || !state.solution}
                                                onClick={onsubmit}
                                                isLoading={state}
                                            >
                                                Submit
                                            </button>
                                            {/* <br className="d-lg-none d-block" />
                                            <span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Ofice</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Studio</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Factory</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout1>
        </>
    )
}


export default dynamic(() => Promise.resolve(Contact), { ssr: false })