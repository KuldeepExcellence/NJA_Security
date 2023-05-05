import React, { useState } from 'react';
import './Css/Home.css';
import HomeCard from './HomeCard';
// import '../picture/Ellipse 1.png'
const Home = () => {
    const [data] = useState(HomeCard)
    console.log(data);
    return (
        <>
            <section className="home-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home-content">
                                <div className="security-service-div">SECURITY SERVICE</div>
                                <div className="for-your-personal-safety">FOR YOUR PERSONAL SAFETY</div>
                                <div className="switch-to-nja-security">Switch to  NJA Security </div>
                                <a className="home-banner-btn" href="contact">
                                Request a quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* home about sectiono */}

            <section className="h-about my-5">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12'>
                            <div className='about-from'>
                                <div className='form-heading'>
                                    <h3 className="formtop">GET STARTED TODAY</h3>
                                </div>
                                <div className='form-box'>
                                    <form>
                                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" />

                                        <label for="exampleFormControlInput1" className="form-label">Contact Number:</label>
                                        <input type="tel" className="form-control" id="exampleFormControlInput1" />

                                        <label for="exampleFormControlInput1" className="form-label">Email Id:</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" />

                                        <button className='form-button' type='submit'>Submit</button>
                                        <p className='mt-3'>Do not fill this form for job enquiry, visit career page for job openings.</p>

                                        <p className='button-text'>One or more fields have an error. Please check and
                                            try again.</p>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-7 col-md-6 col-sm-12 col-xs-12'>
                            <div className='about-content'>
                                <h2 className="heduingcls mb-4 text-danger" style={{ color: '#B23C26' }}>WELCOME TO NJA SECURITY PVT. LTD.</h2>
                                <p className="forprea">Our company M/S NJA SECURITY PRIVATE LIMITED will pioneer the Industry Services and will set standrds by way of Caliber of personnel, uality of services, Commitment to training and development the high degree of professionalism.</p>
                                <p className="forprea">With the need based approch, the company will be in the field of providing security for properties, Industries Corporate men and materials against thef, pilferage, sabotage, all kinds of man made threats, strikes and labour unrest. I will pay my utmost attention in assisting the management by way of extra  security measures and staff. I will also render free advice to clients on all security matters.</p>
                                <a className="home-banner-btn" href="/Contact us">
                                    <span className="">Read More</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* home services */}
            <section className='ser-heading'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-white text-center'>SECURITY SERVICES</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='service my-3'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {
                            data.map((item) => {
                                let { image, title, desc } = item
                                return (
                                    <>
                                        <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3'>
                                            <div className="card" >
                                                <img src={image} className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="card-text">{desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="mapalt py-5" style={{ backgroundColor: "#B23C26", marginTop: '32px', maxWidth: '100%' }}>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-7 col-md-6 col-xs-12 col-sm-12'>
                            <div className="btontnm" style={{ color: "white" }}>
                                <h1 className="uok">TRAINING</h1>
                                <p className="forprea" style={{ marginBottom: '8px', fontSize: '18px' }}>The selected candidates undergo a 5-days training program at our training
                                    academies where they are trained on the following:-
                                    <br />
                                    <br />
                                    (A) To fight and control various types of fire.<br />
                                    (B) Industrial Safety.<br />
                                    (C) Documentation<br />
                                    (D) Handling communication equipment (Intercom, Telephone, Fax and
                                    Walkie-talkie)
                                </p>
                                <button className='form-button' type='submit'>Read More</button>

                            </div>
                        </div>
                    <div className='col-lg-5 col-md-6 col-xs-12 col-sm-12'>
                        <div className="mrimg">
                            <img className="relimk img-fluid" src="../picture/Ellipse 1.png" alt="project mehhk imagees" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
