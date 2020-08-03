import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import tree from "./images/treeicontrans.png";

import BigSmall from "./components/BigSmall";
import Tabs from "./components/Tabs";
import CallNumber from "./components/CallNumber";
import Portfolio from "./components/Portfolio";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        {/* first */}
        <div className="main-landing">
          <div className="tree-div">
            <img className="tree" src={tree} alt="Tree" />
          </div>
          <img className="logo" src={logo} alt="Supreme Forestry" />
          <div className="top-block">
            <BigSmall /> <CallNumber />
          </div>
        </div>
        {/* second */}
        <div className="green-back">
          <Tabs />
        </div>{" "}
        {/* third */}
        <div className="blue-back">
          <Portfolio />
        </div>
      </div>
    );
  }
}
