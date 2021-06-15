import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
