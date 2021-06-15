import React, { Component } from "react";
import Blog from "../common/blog";
import QuickLinks from "../common/quickLinks";
import { Footers } from "../common/states";
import Tweets from "../common/tweets";
import ContactForm from "../sub_comonents/contact_us";

class Footer extends Component {
  render() {
    const state = Footers();
    return (
      <footer>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <h1 className="mb-5 pt-30">Latest Tweets</h1>
            <Tweets state={state.tweets} />
          </div>
          <div className="col-md-3 col-sm-12">
            <h1 className="mb-5 pt-30">Quick Links</h1>
            <QuickLinks state={state.quickLinks} />
          </div>
          <div className="col-md-3 col-sm-12">
            <h1 className="mb-5 pt-30">Latest Blog Posts</h1>
            <Blog state={state.blogDetail} />
          </div>
          <div className="col-md-3 col-sm-12">
            <h1 className="mb-5 pt-30">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
