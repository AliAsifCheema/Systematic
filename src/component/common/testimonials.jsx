import React from "react";

import ReadMore from "../common/readmoreBtn";
import { ClientsReviews } from "./states";

const Clients = (props) => {
  const { title, href } = props;
  const state = ClientsReviews();
  return (
    <div className="clients">
      {state.clientReview.map((items) => (
        <div className="review mb-4" key={items.id}>
          <div className="media mb-2">
            <img className={items.class} src={items.dest} alt={items.alt} />
            <div className="media-body">
              <h4>
                {items.heading}
                <span>{items.span}</span>
              </h4>
            </div>
          </div>
          <p>{items.para}</p>
          <ReadMore title={title} href={href} />
        </div>
      ))}
    </div>
  );
};

export default Clients;
