import React from "react";

const Form = (props) => {
  const { icons } = props;
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        aria-label="Search"
      />
      <button className="btn" type="submit">
        <i className={icons}></i>
      </button>
    </form>
  );
};

export default Form;
