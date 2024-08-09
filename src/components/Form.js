import React from "react";
import "../css/form.css";

const Form = () => {

  return (
    <div className="container">
      <div>
        <h2 className="form-header">Tell us about your project!</h2>
        <p className="form-header">Please fill out the form with your project details and we will reach out to schedule 
          your free on-site consultation.<br />
        </p>
        <p className="form-header">
          <b>Service Areas:</b><br />
          East Bay Area, including:<br />
          Martinez, Benicia, Pleasant Hill, Concord, Walnut Creek, Alamo, Lafayette, 
          Orinda, El Cerrito, Clayton, Danville, Alameda, Oakland, Emeryville, Berkeley
        </p>
        <p className="form-header">
          <b>Get in touch:</b><br />
          eastbaysheds@gmail.com<br />
          925-222-5865
        </p>
      </div>
      <div className="contact-form">
        <form action="https://formsubmit.co/ef7f362939f3ddd085c796574d7a673a" method="POST">
          <label>First Name:</label>
          <input type="text" name="First Name"></input>
          <label>Last Name:</label>
          <input type="text" name="Last Name"></input>
          <label>Phone Number:</label>
          <input type="text" name="Phone"></input>
          <label>Email:</label>
          <input type="email" name="Email"></input>
          <label>Address:</label>
          <input type="text" name="Address"></input>
          <label>Project Details:</label>
          <textarea
            name="Details"
            type="text"
            placeholder="Tell us about your project (dimensions, design specifications, etc)"
            size="lg"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;