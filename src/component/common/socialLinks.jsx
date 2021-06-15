import React, { Component } from "react";
import { SocialsLinks } from "./states";

class Social extends Component {
  render() {
    const state = SocialsLinks();
    return (
      <ul className="social">
        {state.socialIcons.map((items) => (
          <li key={items.id}>
            <a href={items.href}>
              <i className={items.class}></i>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Social;
