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
  HeaderWebsite: {
    displayName: "HeaderWebsite"
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/components/layout/headers/Website/HeaderWebsite.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

// import { Link, IndexLink } from 'react-router'
// import { connect } from 'react-redux'
// require('./header-website.scss')

var HeaderWebsite = _wrapComponent("HeaderWebsite")(function (_React$Component) {
  (0, _inherits3.default)(HeaderWebsite, _React$Component);

  function HeaderWebsite() {
    (0, _classCallCheck3.default)(this, HeaderWebsite);
    return (0, _possibleConstructorReturn3.default)(this, (HeaderWebsite.__proto__ || Object.getPrototypeOf(HeaderWebsite)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeaderWebsite, [{
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "nav",
        { className: "navbar navbar-fixed-top navbar-color-on-scroll" },
        _react3.default.createElement(
          "div",
          { className: "container" },
          _react3.default.createElement(
            "div",
            { className: "navbar-header" },
            _react3.default.createElement(
              "button",
              {
                type: "button",
                className: "navbar-toggle",
                "data-toggle": "collapse",
                "data-target": "#navigation-index"
              },
              _react3.default.createElement(
                "span",
                { className: "sr-only" },
                "Toggle navigation"
              ),
              _react3.default.createElement("span", { className: "icon-bar" }),
              _react3.default.createElement("span", { className: "icon-bar" }),
              _react3.default.createElement("span", { className: "icon-bar" })
            ),
            _react3.default.createElement(
              "a",
              { href: "http://www.creative-tim.com" },
              _react3.default.createElement(
                "div",
                { className: "logo-container" },
                _react3.default.createElement(
                  "div",
                  { className: "logo" },
                  _react3.default.createElement("img", {
                    src: "assets/img/logo.png",
                    alt: "Creative Tim Logo",
                    rel: "tooltip",
                    title: "",
                    "data-placement": "bottom",
                    "data-html": "true",
                    "data-original-title": "<b>Material Kit</b> was Designed & Coded with care by the staff from <b>Creative Tim</b>"
                  })
                ),
                _react3.default.createElement(
                  "div",
                  { className: "brand" },
                  "Creative Tim"
                )
              )
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navigation-index" },
            _react3.default.createElement(
              "ul",
              { className: "nav navbar-nav navbar-right" },
              _react3.default.createElement(
                "li",
                null,
                _react3.default.createElement(
                  "a",
                  { href: "components-documentation.html", target: "_blank" },
                  _react3.default.createElement(
                    "i",
                    { className: "material-icons" },
                    "dashboard"
                  ),
                  " Components"
                )
              ),
              _react3.default.createElement(
                "li",
                null,
                _react3.default.createElement(
                  "a",
                  { href: "#s", onClick: "scrollToDownload()" },
                  _react3.default.createElement(
                    "i",
                    { className: "material-icons" },
                    "cloud_download"
                  ),
                  " Download"
                )
              ),
              _react3.default.createElement(
                "li",
                null,
                _react3.default.createElement(
                  "a",
                  {
                    rel: "tooltip",
                    title: "",
                    "data-placement": "bottom",
                    href: "https://twitter.com/CreativeTim",
                    target: "_blank",
                    className: "btn btn-white btn-simple btn-just-icon",
                    "data-original-title": "Follow us on Twitter"
                  },
                  _react3.default.createElement("i", { className: "fa fa-twitter" })
                )
              ),
              _react3.default.createElement(
                "li",
                null,
                _react3.default.createElement(
                  "a",
                  {
                    rel: "tooltip",
                    title: "",
                    "data-placement": "bottom",
                    href: "https://www.facebook.com/CreativeTim",
                    target: "_blank",
                    className: "btn btn-white btn-simple btn-just-icon",
                    "data-original-title": "Like us on Facebook"
                  },
                  _react3.default.createElement("i", { className: "fa fa-facebook-square" })
                )
              ),
              _react3.default.createElement(
                "li",
                null,
                _react3.default.createElement(
                  "a",
                  {
                    rel: "tooltip",
                    title: "",
                    "data-placement": "bottom",
                    href: "https://www.instagram.com/CreativeTimOfficial",
                    target: "_blank",
                    className: "btn btn-white btn-simple btn-just-icon",
                    "data-original-title": "Follow us on Instagram"
                  },
                  _react3.default.createElement("i", { className: "fa fa-instagram" })
                )
              )
            )
          )
        )
      );

      //
      // // <IndexLink to="/" activeClassName="active">Home</IndexLink>
      // {' | '}
      // <Link to="/companies" activeClassName="active">Companies</Link>
      // {' | '}
      // <Link to="/users" activeClassName="active">Users</Link>
      // {' | '}
      // <Link to="/demands" activeClassName="active">Demands</Link>
      // {' | '}
      // <Link to="/services" activeClassName="active">Services</Link>
      // {' | '}
      // <Link to="/fancy" activeClassName="active">Test page</Link>
    }
  }]);
  return HeaderWebsite;
}(_react3.default.Component));

exports.default = HeaderWebsite;
module.exports = exports["default"];