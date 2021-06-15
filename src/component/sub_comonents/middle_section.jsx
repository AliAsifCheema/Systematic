import React, { Component } from "react";
import About from "../common/about";
import Services from "../common/services";
import { Middle } from "../common/states";
import Clients from "../common/testimonials";

class MiddleSection extends Component {
  render() {
    const state = Middle();
    return (
      <section className="middle-section bg-light">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1 className="mb-5">A little About Us</h1>
            <About title={state.aboutLink.title} href={state.aboutLink.href} />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="mb-5">Some of Our Services</h1>
            <Services
              title={state.serviceLink.title}
              href={state.serviceLink.href}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="mb-5">What Our Clients Say</h1>
            <Clients
              title={state.clientLink.title}
              href={state.clientLink.href}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default MiddleSection;
