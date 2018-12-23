"use strict";

var app = {
  header: "Indecision App",
  subtitle: "An app to help make decisions",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    console.log("Options now has " + app.options.length + " options");
    render();
  }
};

var clearOptions = function clearOptions() {
  app.options = [];
  render();
};

var numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.header
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "There are " + app.options.length + " options" : "There are no options"
    ),
    React.createElement(
      "button",
      { onClick: clearOptions },
      "Remove All."
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (num, index) {
        return React.createElement(
          "p",
          { key: index },
          ++index,
          ": ",
          num
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
render();
