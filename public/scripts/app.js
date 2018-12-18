"use strict";

var app = {
  header: "Indecision App",
  paragraph: "An app to help make decisions",
  list: ["Dog", "Cat"]

  //JSX is javascript HTML
};var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.header
  ),
  React.createElement(
    "p",
    null,
    app.paragraph
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      app.list[0]
    ),
    React.createElement(
      "li",
      null,
      app.list[1]
    )
  )
);

var user = {
  name: "Cody",
  age: 25,
  location: "Texas"
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age > 18 && React.createElement(
    "p",
    null,
    "Age: " + user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
