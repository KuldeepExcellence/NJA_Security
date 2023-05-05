import React from 'react';
import './Css/Contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact-banner">
        <div className="container">
        </div>
      </section>
      {/* <section className='about-page'>
        <img src='../../picture/Rectangle 2 (1).png'></img>
      </section> */}

      {/* start contact form */}
      <section className='c-details my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-12 col-xs-12 col-sm-12'>
              <div className='contact-now'>
                <h3 className='c-heading'>CONTACT US</h3>
                <div className='ad-box d-flex'>
                  <img src='../picture/Group 7.png' alt='location'></img>
                  <p className='address'>18, G.F., Gali  No. 19, Bhagwati<br></br>
                    Garden Extn., Uttam Nagar,<br></br>
                    New Delhi-110059</p>
                </div>
                <div className='g-box d-flex'>
                  <img src='../picture/Group 8.png' alt='location'></img>
                  <a href='mailto:njasecur@gmail.com' className='mail'>njasecur@gmail.com</a>
                </div>
                <div className='p-box d-flex'>
                  <img src='../picture/Group 9.png' alt='location'></img>
                  <div className='phone'>
                    <a href='tel:9971187836' className='mail'>99711-87836</a>
                    <a href='tel:8750402774' className='mail'>87504-02774</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-xs-12 col-sm-12'>
              <div className='contact-form'>
                <h3 className='c-heading'>REQUEST A QUOTE</h3>
                <p>Please fill up the Inquiry Form. We will contact you within 2 working hours</p>

                <div className='contact-page-f'>
                  <form>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <label for="exampleFormControlInput1" class="form-label">Contact Persons Name:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <label for="exampleFormControlInput1" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <label for="exampleFormControlInput1" class="form-label">Contact Number:</label>
                        <input type="tel" class="form-control" id="exampleFormControlInput1" />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <label for="exampleFormControlInput1" class="form-label">Company Name:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                      </div>
                      <div className='col-lg-12 col-md-12 col-sm-12'>
                        <label for="exampleFormControlInput1" class="form-label">Your Inquiry:</label>
                        <textarea type="text" class="form-control" rows='3' col='5' id="exampleFormControlInput1" />
                      </div>
                    </div>
                    <button className='contact-button' type='submit'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='map my-5'>
        <div className='container-fluid p-0'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510412846!2d76.7635645984973!3d28.644287350921367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1683263506387!5m2!1sen!2sin" style={{ width: "100%", height: "500px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
