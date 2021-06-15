import React from "react";
import ReadMore from "./readmoreBtn";
import { Abouts } from "./states";

const About = (props) => {
  const { title, href } = props;
  const state = Abouts();
  return (
    <div className="about row">
      <div className="col-12">
        <img
          className={state.aboutImg.class}
          src={state.aboutImg.dest}
          alt={state.aboutImg.alt}
        />
      </div>
      <div className="col-12">
        <p className="text-justify">
          {state.aboutParagraph.p1} <br />
          <br />
          {state.aboutParagraph.p2}
        </p>
      </div>
      <div className="col-12">
        <ReadMore title={title} href={href} />
      </div>
    </div>
  );
};

export default About;
