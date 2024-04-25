// import Link from "next/link";
// import dynamic from "next/dynamic";
// import Layout from "../components/layout/Layout";
// import photo from "../public/assets/imgs/page/homepage6/img-4.png"
// import Image from "next/image";

// function Contactform() {
//     return (
//         <>
//             <Layout>
//                 <section className="section">
//                     <div className="container col-lg-7 col-md-4 m-7 " style={{ marginBottom: "40px", marginTop: "40px" }}>
//                         <div className="card shadow">
//                             <div className="card-body" style={{background: "rgb(232,188,5)", background: "radial-gradient(circle, rgba(232,188,5,1) 29%, rgba(70,252,91,1) 100%)"}}>
//                                 <div className="row">
//                                     <div className="col-lg-6 col-md-6">
//                                         <h2 className="text-body-lead "  style={{fontSize:"40px", display:"flex", justifyContent:"center"}}>Company</h2>
//                                         <hr></hr>
//                                         <div class="container m-4">
//                                             <div class="row mt-60 ">
//                                                 <div class="col-2 ">
//                                                 <h1>
//                                                     <i class="bi bi-buildings"></i>
//                                                 </h1>
//                                                 </div>
//                                                 <div class="col-10">
//                                                     <p className="text-body-lead " style={{fontSize:"25px"}}>Human Before<br></br> Resource</p>
//                                                 </div>
//                                             </div>

//                                             <div class="row mt-40 ">
//                                                 <div class="col-2 ">
//                                                 <h1>
//                                                     <i class="bi bi-geo-alt"></i>
//                                                 </h1>
//                                                 </div>
//                                                 <div class="col-10">
//                                                     <p className="text-body-lead mt-10 " style={{fontSize:"25px"}}>Kolkata</p>
//                                                 </div>
//                                             </div>

//                                             <div class="row mt-40 ">
//                                                 <div class="col-2 ">
//                                                 <h1>
//                                                     <i class="bi bi-telephone"></i>
//                                                 </h1>
//                                                 </div>
//                                                 <div class="col-10">
//                                                     <p className="text-body-lead mt-10 " style={{fontSize:"25px"}}>1234567899</p>
//                                                 </div>
//                                             </div>

//                                             <div class="row mt-40 ">
//                                                 <div class="col-2 ">
//                                                 <h1>
//                                                     <i class="bi bi-envelope"></i>
//                                                 </h1>
//                                                 </div>
//                                                 <div class="col-10">
//                                                     <p className="text-body-lead mt-10 " style={{fontSize:"25px"}}>hbr@gmai.com</p>
//                                                 </div>
//                                             </div>
                                            
//                                         </div>
//                                     </div>




//                                     <div className="col-lg-6 col-md-6">
//                                     <h2 className="text-body-lead "  style={{fontSize:"40px", display:"flex", justifyContent:"center"}}>Contact Us</h2>
//                                         <hr />
//                                         <form className="row g-3 needs-validation">
//                                             <div className="col-md-6 position-relative">
//                                                 <label className="form-label">First name</label>
//                                                 <input type="text" className="form-control" placeholder="First Name" required />
//                                             </div>
//                                             <div className="col-md-6 position-relative">
//                                                 <label for="validationTooltip02" className="form-label">Last name</label>
//                                                 <input type="text" className="form-control" id="validationTooltip02" placeholder="Last Name" required />
//                                             </div>
//                                             <div className="col-md-6 position-relative">
//                                                 <label for="validationTooltip02" className="form-label">Company Name</label>
//                                                 <input type="text" className="form-control" id="validationTooltip02" placeholder="Company Name" required />
//                                             </div>
//                                             <div className="col-md-6 position-relative">
//                                                 <label for="validationTooltip02" className="form-label">Email ID</label>
//                                                 <input type="text" className="form-control" id="validationTooltip02" placeholder="Email ID" required />
//                                             </div>
//                                             <div className="col-md-6 position-relative">
//                                                 <label for="validationTooltip02" className="form-label">Job Title</label>
//                                                 <input type="text" className="form-control" id="validationTooltip02" placeholder="Job Title" required />
//                                             </div>
//                                             <div className="col-md-6 position-relative">
//                                                 <label for="validationTooltip02" className="form-label">Phone Number</label>
//                                                 <input type="text" className="form-control" id="validationTooltip02" placeholder="Phone Number" required />
//                                             </div>
//                                             <div className="col-md-12 position-relative">
//                                                 <label for="validationTooltip04" className="form-label">I'm interested in</label>
//                                                 <select className="form-select" id="validationTooltip04" required>
//                                                     <option selected disabled value="">select...</option>
//                                                     <option>IT</option>
//                                                     <option>BPO</option>
//                                                     <option>Manufacturing</option>
//                                                 </select>
//                                                 <div className="invalid-tooltip">
//                                                     Please select a valid state.
//                                                 </div>
//                                             </div>
//                                             <div className="col-12" style={{ justifyContent: "center", display: "flex" }}>
//                                                 <button className="col-md-12 btn btn-primary" type="submit">Submit form</button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//         </>
//     )
// }


// export default dynamic(() => Promise.resolve(Contactform), { ssr: false })




