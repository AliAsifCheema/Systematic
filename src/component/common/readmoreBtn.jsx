import React from "react";

const icon = {
  ilink: "fa fa-angle-double-right ml-1",
};

const ReadMore = (props) => {
  const { href, title } = props;
  const state = icon;
  return (
    <div className="text-right">
      <a className="readmore" href={href}>
        {title} <i className={state.ilink}></i>
      </a>
    </div>
  );
};

export default ReadMore;
