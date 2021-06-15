import React from "react";
import ReadMore from "../common/readmoreBtn";
import { Servicies } from "./states";

const Services = (props) => {
  const { title, href } = props;
  const state = Servicies();
  return (
    <div className="service-content">
      {state.media.map((items) => (
        <div className="media mb-1" key={items.id}>
          <img className={items.class} src={items.dest} alt={items.alt} />
          <div className="media-body">
            <h4>{items.heading}</h4>
            <p className="text-justify">{items.para}</p>
          </div>
        </div>
      ))}
      <ReadMore title={title} href={href} />
    </div>
  );
};

export default Services;
