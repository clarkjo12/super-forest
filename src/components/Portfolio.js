import React from "react";

import sun from "../images/suntrans.png";

import PortPic1 from "./PicCards/Pic1";
import PortPic2 from "./PicCards/Pic2";
import PortPic3 from "./PicCards/Pic3";
import PortPic4 from "./PicCards/Pic4";
import PortPic5 from "./PicCards/Pic5";
import PortPic6 from "./PicCards/Pic6";
import PortPic7 from "./PicCards/Pic7";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <div className="port-main">
        <div className="port-left">
          <p className="siphon gray handy-text">Checkout Our Handiwork,</p>
          <PortPic1 />
          <PortPic2 />
          <PortPic3 />
          <PortPic4 />
        </div>

        <div className="port-right">
          <img className="sun" src={sun} alt="Sun" />
          <PortPic5 />
          <PortPic6 />
          <PortPic7 />
          <div className="final-div">
            <p className="siphon gray final-title">
              See What Else We've Been Up Too...
            </p>{" "}
            <p className="kollektif gray final-text">
              Visit our Facebook page to see the most recent projects we've
              helped Triangle's homeowners with.
            </p>{" "}
            <a
              className="fb-a-link"
              href="https://www.facebook.com/Supreme-Forestry-102873441360721/"
            >
              <div className="fb-icon">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
