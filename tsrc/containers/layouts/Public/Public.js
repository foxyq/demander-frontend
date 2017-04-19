'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp;

var _antd = require('antd');

var _headers = require('components/layout/headers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  PublicLayout: {
    displayName: 'PublicLayout'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/containers/layouts/Public/Public.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Footer = _antd.Layout.Footer,
    Content = _antd.Layout.Content;

// import AppBar from 'material-ui/AppBar'
// import { Menu, Icon } from 'antd'
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
//
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { purple500, purple700, purple50 } from 'material-ui/styles/colors'

// import { FooterWebsite } from 'components/layout/Footer/FooterWebsite'

// const muiTheme = getMuiTheme({
//   AppBar: {
//     height: 70,
//   },
//   palette: {
//     primary1Color: purple500,
//     primary2Color: purple700,
//     alternateTextColor: purple50,
//     color: purple50,
//     accent1Color: purple50,
//     accent2Color: purple50,
//     accent3Color: purple50,
//     textColor: purple50,
//   },
//   color: {
//     color: purple50,
//   },
//   title: {
//     color: purple50,
//     height: 15,
//   },
// })

var PublicLayout = _wrapComponent('PublicLayout')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(PublicLayout, _Component);

  function PublicLayout() {
    (0, _classCallCheck3.default)(this, PublicLayout);
    return (0, _possibleConstructorReturn3.default)(this, (PublicLayout.__proto__ || Object.getPrototypeOf(PublicLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(PublicLayout, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          _antd.Layout,
          null,
          _react3.default.createElement(_headers.HeaderWebsite, null),
          _react3.default.createElement(
            Content,
            null,
            _react3.default.createElement(
              'div',
              { className: 'layout-wrapper' },
              this.props.children
            )
          ),
          _react3.default.createElement(Footer, null)
        )
      );
    }
  }]);
  return PublicLayout;
}(_react2.Component), _class.propTypes = {
  children: _react2.PropTypes.object
}, _temp));

exports.default = PublicLayout;
module.exports = exports['default'];