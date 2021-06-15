import React from "react";

const QuickLinks = (props) => {
  const { state } = props;
  return (
    <div className="quick_links">
      <ul>
        {state.map((items) => (
          <li className="mb-2" key={items.id}>
            <a href={items.href}>
              <i className={items.icon}></i>
              {items.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
