import React from "react";
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <div class="footer py-5 ">
                <div class="container bynow">
                    <div className="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="logo">
                                <img className="img-fluid" src="../picture/nja logo 1.png"></img>
                                <h5>NJA SECURITY PVT. LTD</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <h5  className="f-heading">USEFULL LINK</h5>
                            <ul className="uselinks">
                                <a href="/">
                                <li><i class="bi bi-chevron-right"></i>HOME</li></a>
                                <a href="/home">
                                <li><i class="bi bi-chevron-right"></i>SECURITY SERVICES</li></a>
                                <a href="/about us">
                                <li><i class="bi bi-chevron-right"></i>ABOUT US</li></a>
                                <a href="/training">
                                <li><i class="bi bi-chevron-right"></i>TRAINING</li></a>
                                <a href="/contact">
                                <li><i class="bi bi-chevron-right"></i>CONTACT</li></a>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
                            <h5  className="f-heading">SECURITY SERVICES</h5>
                            <ul className="uselinks">
                                <a href="/Guarding">
                                 <li><i class="bi bi-chevron-right"></i>Guarding/Industrial Security</li></a>
                                <a href="/Transportation">
                                 <li><i class="bi bi-chevron-right"></i>Transportation of Cash</li></a>
                                <a href="/Security">
                                 <li><i class="bi bi-chevron-right"></i>Security of Ware Houses</li></a>
                                <a href="/Night">
                                 <li><i class="bi bi-chevron-right"></i>Night Patrol</li></a>
                                <a href="/Electronic">
                                  <li><i class="bi bi-chevron-right"></i>Electronic Security</li></a>
                                <a href="/Equipment">
                                 <li><i class="bi bi-chevron-right"></i>Security Equipment</li></a>
                                <a href="/Installation">
                                  <li><i class="bi bi-chevron-right"></i>Fire safety systems.</li></a>
                                <a href="/Private">
                                 <li><i class="bi bi-chevron-right"></i>Private Investigation</li></a>
                                <a href="/Audit">
                                  <li><i class="bi bi-chevron-right"></i>Security audit/consultancy</li></a>
                                <a href="/Staff">
                                 <li><i class="bi bi-chevron-right"></i>Training of Security Staff</li></a>
                                <a href="/Buisness">
                                 <li><i class="bi bi-chevron-right"></i>Business Executive Protection</li></a>
                                <a href="/Event">
                                 <li><i class="bi bi-chevron-right"></i>Events Security</li></a>

                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 conres">
                            <h5 className="f-heading">CONTACT US</h5>
                            <ul className="contact-links">
                                <li>
                                    18, G.F., Gali  No. 19, Bhagwati Garden Extn., Uttam Nagar,New Delhi-110059
                                </li>
                                <li>
                                   njasecur@gmail.com
                                   </li>
                                <li>
                                    99711-87836 <br />87504-02774
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Footer;