import React from "react";
import "./App.css";
import BigSmall from "./components/BigSmall";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="main-landing">
        <img className="logo" src={logo} alt="Supreme Forestry" />
        <div className="top-block">
          <BigSmall />{" "}
          <div className="call-number red">
            <div>
              <h3 className="call">We do it all - Call on us</h3>
              <h3 className="call"> when you need job done right.</h3>
            </div>
            <h1 className="number siphon">919-906-8310</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
