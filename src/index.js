import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let date = new Date(2020, 5, 2, 20);
let time = date.getHours();
let greeting = "";

const cssStyle = {};

if (time >= 1 && time < 12) {
  greeting = "Good Morning!";
  cssStyle.color = "green";
} else if (time >= 12 && time < 19) {
  greeting = "Good Afternoon!";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night!";
  cssStyle.color = "Black";
}
ReactDOM.render(
  <div>
    <h1>
      Hello Sir, <span style={cssStyle}>{greeting}</span>
    </h1>
  </div>,
  document.getElementById("root")
);
