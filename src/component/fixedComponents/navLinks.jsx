import React, { Component } from "react";

class Links extends Component {
  state = {
    navlinks: [
      { id: "1", title: "HomePage", link: "#home" },
      { id: "2", title: "Style Demo", link: "#style" },
      { id: "3", title: "Full Width", link: "#width" },
      { id: "4", title: "DropDown", link: "#dropdown" },
      { id: "5", title: "Gallery", link: "#gallery" },
      { id: "6", title: "Portfolio", link: "#porfolio" },
      { id: "7", title: "Link Test", link: "#linktest" },
      { id: "8", title: "Long Link Test", link: "#longLinktest" },
    ],
  };
  render() {
    return (
      <ul className="navbar-links">
        {this.state.navlinks.map((items) => (
          <li className="nav-item" key={items.id}>
            <a className="nav-link" href={items.link}>
              {items.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Links;
