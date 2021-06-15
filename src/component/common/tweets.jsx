import React from "react";

const Tweets = (props) => {
  const { state } = props;
  return (
    <div className="tweets">
      {state.map((items) => (
        <span className={items.spanClass} key={items.id}>
          {items.span}
          <p>{items.para}</p>
        </span>
      ))}
    </div>
  );
};

export default Tweets;
