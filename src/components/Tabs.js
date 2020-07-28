import React from "react";
import {
  faHourglassHalf,
  faSmileBeam,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "one"
    };
  }

  render() {
    const switchBorder = () => {
      switch (this.state.currentView) {
        case "one":
          return (
            <div className="border-div">
              <div className="tab tab-border"></div>
              <div className="tab"></div>
              <div className="tab"></div>
            </div>
          );
        case "two":
          return (
            <div className="border-div">
              <div className="tab"></div>
              <div className="tab tab-border"></div>
              <div className="tab"></div>
            </div>
          );
        case "three":
          return (
            <div className="border-div">
              <div className="tab"></div>
              <div className="tab "></div>
              <div className="tab tab-border"></div>
            </div>
          );
      }
    };

    const switchView = () => {
      switch (this.state.currentView) {
        case "one":
          return (
            <div className="tab-item">
              <h2>tab 1</h2>
            </div>
          );
        case "two":
          return (
            <div className="tab-item">
              <h2>tab 2</h2>
            </div>
          );
        case "three":
          return (
            <div className="tab-item">
              <h2>tab 3</h2>
            </div>
          );
      }
    };

    return (
      <section className="tabs">
        <div className="container siphon">
          <div
            onClick={e => this.setState({ currentView: "one" })}
            className="tab-item"
          >
            <div>
              <FontAwesomeIcon icon={faHourglassHalf} size="5x" />
            </div>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div
            onClick={e => this.setState({ currentView: "two" })}
            className="tab-item"
          >
            <div>
              <FontAwesomeIcon icon={faSmileBeam} size="5x" />
            </div>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div
            onClick={e => this.setState({ currentView: "three" })}
            className="tab-item"
          >
            <div>
              <FontAwesomeIcon icon={faHeartbeat} size="5x" />
            </div>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
        <div className="border-container">{switchBorder()}</div>
        <div className="container">{switchView()}</div>
      </section>
    );
  }
}
