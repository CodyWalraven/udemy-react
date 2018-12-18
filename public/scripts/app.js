"use strict";

console.log("App.js is running, yeah son! huh");

//JSX is javascript HTML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Cody"
  ),
  React.createElement(
    "p",
    null,
    "This is some text"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Cody Walraven"
  ),
  React.createElement(
    "p",
    null,
    " Age: 25"
  ),
  React.createElement(
    "p",
    null,
    " Location Texas"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
