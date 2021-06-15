import React, { Component } from "react";

import SocialLinks from "../common/socialLinks";
import Nav2 from "../fixedComponents/nav2";
import About from "../sub_comonents/main-content";
import MiddleSection from "../sub_comonents/middle_section";
import Footer from "./footer";
import { Homes } from "../common/states";

class Home extends Component {
  render() {
    const state = Homes();
    return (
      <main>
        <section className="sys-head">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={state.system.class}>
                <h1>S</h1>
                <h2>{state.system.sysTitle}</h2>
                <p>{state.system.caption}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 align-self-center">
              <div className="social-links">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
        <Nav2 />
        <About />
        <MiddleSection />
        <Footer />
      </main>
    );
  }
}

export default Home;
