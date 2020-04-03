import React from "react";
import ReactDom from "react-dom";
import NavConfig from "./components/NavConfig";
import Carousel from './components/Carousel'
import "./index.css";

function App () {
  return (
    <NavConfig>
      {(speed, display) => (
        <Carousel speed={speed} display={display} />
      )}
    </NavConfig>
  );
}

ReactDom.render(
  <App />, 
  document.getElementById("root")
);