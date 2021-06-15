import React from "react";
import ReadMore from "./readmoreBtn";

const Blog = (props) => {
  const { state } = props;
  return (
    <div className="latest_blogs">
      {state.map((items) => (
        <div className="blog" key={items.id}>
          <div className="blog-title">
            <h4>{items.ptitle}</h4>
            <h6>{items.domain}</h6>
            <h6>{items.date}</h6>
          </div>

          <div className="detail mt-3">
            <p>{items.para}</p>
          </div>
          <ReadMore href={items.blogLink.href} title={items.blogLink.title} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
