"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleOnPick = _this.handleOnPick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleOnPick",
    value: function handleOnPick() {
      var selectedChoice = this.state.options[Math.floor(Math.random() * this.state.options.length)];
      alert(selectedChoice);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(choice) {
      if (choice && !this.state.options.includes(choice)) {
        this.setState(function (prevState) {
          return { options: prevState.options.concat(choice) };
        });
      } else {
        alert("Enter a non duplicate value");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = "";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handleOnPick: this.handleOnPick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision Udemy App"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handleOnPick,
        disabled: !props.hasOptions
      },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (val) {
      return React.createElement(Option, { key: val, option: val });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.option
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = "";
      if (option) this.props.handleAddOption(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add New Item"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ["Option one", "Option two"] }), document.getElementById("app"));
