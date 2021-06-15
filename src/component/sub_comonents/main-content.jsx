import React, { Component } from "react";
import ReadMore from "../common/readmoreBtn";
import { MainContent } from "../common/states";

class Main extends Component {
  render() {
    const state = MainContent();
    return (
      <section className="main-contents">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="main-img">
              <img
                className={state.mainImage.class}
                src={state.mainImage.dest}
                alt={state.mainImage.alt}
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 align-self-center">
            <div className="main-content">
              <div className="huge-title">
                <span>
                  {state.aboutContent.h1} <br />
                  {state.aboutContent.h2}
                </span>
              </div>
              <p>{state.aboutContent.paragraph}</p>
              <ReadMore
                href={state.aboutContent.link.href}
                title={state.aboutContent.link.title}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
