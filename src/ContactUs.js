import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="contactUs">
      <h1>Contact Us</h1>
      <div className="contactDiv">
        <div className="contactCard">
          <h6>INDIA</h6>
          <p>1800 419 4919</p>
        </div>
        <div className="contactCard">
          <h6>OUTSIDE INDIA</h6>
          <p>+91-8061799200</p>
        </div>
        <div className="contactCard">
          <h6>GLOBAL EMAIL</h6>
          <p>info@kredx.com</p>
        </div>
        <div className="contactCard">
          <h6>FOR MEDIA ENQUIRIES</h6>
          <p>pr@kredx.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
