import Breadcrumb from "elements/Breadcrumb";
import { InputDate } from "elements/Form";
import React, { Component } from "react";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb} />
          </div>
        </div>
      </div>
    );
  }
}
