"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Tabs: {
    displayName: "Tabs"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/components/pages/Company/Tabs/Tabs.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Tabs = _wrapComponent("Tabs")(function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    (0, _classCallCheck3.default)(this, Tabs);
    return (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tabs, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "row" },
        _react3.default.createElement(
          "div",
          { className: "col-md-6 col-md-offset-3" },
          _react3.default.createElement(
            "div",
            { className: "profile-tabs" },
            _react3.default.createElement(
              "div",
              { className: "nav-align-center" },
              _react3.default.createElement(
                "ul",
                { className: "nav nav-pills", role: "tablist" },
                _react3.default.createElement(
                  "li",
                  { className: "" },
                  _react3.default.createElement(
                    "a",
                    {
                      href: "#studio",
                      role: "tab",
                      "data-toggle": "tab",
                      "aria-expanded": "false"
                    },
                    _react3.default.createElement("i", { className: "fa fa-facebook", "aria-hidden": "true" }),
                    "Facebook"
                  )
                ),
                _react3.default.createElement(
                  "li",
                  { className: "active" },
                  _react3.default.createElement(
                    "a",
                    {
                      href: "#work",
                      role: "tab",
                      "data-toggle": "tab",
                      "aria-expanded": "true"
                    },
                    _react3.default.createElement("i", { className: "fa fa-twitter", "aria-hidden": "true" }),
                    "Twitter"
                  )
                ),
                _react3.default.createElement(
                  "li",
                  { className: "" },
                  _react3.default.createElement(
                    "a",
                    {
                      href: "#shows",
                      role: "tab",
                      "data-toggle": "tab",
                      "aria-expanded": "false"
                    },
                    _react3.default.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" }),
                    "LinkedIn"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Tabs;
}(_react3.default.Component));

exports.default = Tabs;
module.exports = exports["default"];