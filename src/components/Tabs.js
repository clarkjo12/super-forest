import React from "react";
import {
  faHourglassHalf,
  faSmileBeam,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tabs extends React.PureComponent {
  testing() {
    console.log("testing");
  }

  render() {
    return (
      <section className="tabs">
        <div className="tab container siphon">
          <div className="tab-item tab-border" onClick={this.testing}>
            <div>
              <FontAwesomeIcon icon={faHourglassHalf} size="5x" />
            </div>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div className="tab-item ">
            <div>
              <FontAwesomeIcon icon={faSmileBeam} size="5x" />
            </div>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div className="tab-item">
            {" "}
            <div>
              <FontAwesomeIcon icon={faHeartbeat} size="5x" />
            </div>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
        <div className="tab-content-item show">
          <div className="tab-1-content-inner">
            <div>
              <p className="text-lg kollektif">
                If you decide Netflix isn't for you - no problem. No commitment.
                Cancel online anytime.
              </p>
              <a href="#" className="btn btn-sm siphon">
                Watch Free For 30 Days
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
