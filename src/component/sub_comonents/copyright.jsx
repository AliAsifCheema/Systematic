import React, { Component } from "react";

class CopyRight extends Component {
  state = {
    copyright: {
      text: "Copyright© 2020 DomainName-All Rights Reserved",
      domain: "Powered By somedomain.com",
    },
  };
  render() {
    const { text, domain } = this.state.copyright;
    return (
      <div className="copyright bg-light">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="copy-text">
              <p>{text}</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="copy-org">
              <p>{domain}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
