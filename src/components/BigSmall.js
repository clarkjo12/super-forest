import React, { Component } from "react";
import { Transition } from "react-spring/renderprops";

export class BigSmall extends Component {
  render() {
    return (
      <div className="BigSmall">
        <h1 className="big red siphon">BIG</h1>
        <h5 className="small red siphon">and small.</h5>
      </div>
    );
  }
}

export default BigSmall;
