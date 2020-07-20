import React, { Component } from "react";

import sun from "../images/suntrans.png";
import logo from "../images/logo.png";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <div className="port-main">
        <div className="port-left">
          <p className="siphon gray handy-text">Checkout Our Handiwork</p>
          <img className="pic" src={logo} alt={logo} />
          <img className="pic" src={logo} alt={logo} />
          <img className="pic" src={logo} alt={logo} />
          <img className="pic" src={logo} alt={logo} />
        </div>

        <div className="port-right">
          <img className="sun" src={sun} alt="Sun" />
          <img className="pic" src={logo} alt={logo} />
          <img className="pic" src={logo} alt={logo} />
          <img className="pic" src={logo} alt={logo} />
          <div>
            <p className="siphon gray final-title">
              See What Else We've Been Up Too...
            </p>
            <p className="kollektif gray final-text">
              Visit our Facebook page to see the most recent projects we've been
              helping Raleigh-Durham's homeowners.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
