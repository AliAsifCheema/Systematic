import React, { Component } from "react";

import Form from "./navForm";

class Nav1 extends Component {
  state = {
    links: [
      { id: "1", title: "SignUp", href: "#signup" },
      { id: "2", title: "Login", href: "#login" },
      { id: "3", title: "RSS Feeds", href: "#rss_feeds" },
      { id: "4", class: "display", title: "Archived News", href: "#news" },
    ],
    icon: { class: "fa fa-search" },
  };
  render() {
    return (
      <div className="nav1">
        <div className="row">
          <div className="col-md-8 col-sm-12 align-self-center">
            <ul>
              {this.state.links.map((items) => (
                <li key={items.id}>
                  <a className={items.class} href={items.href}>
                    {items.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <Form icons={this.state.icon.class} />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav1;
