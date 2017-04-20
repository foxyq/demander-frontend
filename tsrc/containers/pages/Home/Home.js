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

var _dec, _class, _class2, _temp;

var _lodash = require('lodash');

var _reactRedux = require('react-redux');

require('antd/dist/antd.less');

var _users = require('redux/modules/api/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/containers/pages/Home/Home.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Home = _wrapComponent('Home')((_dec = (0, _reactRedux.connect)(function (_ref) {
  var api = _ref.api,
      auth = _ref.auth;
  return {
    users: (0, _lodash.get)(api, 'users.getUsers.data'),
    token: (0, _lodash.get)(auth, 'user.token')
  };
}, {
  getUsers: _users.getUsers
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        'HomePage content'
      );
    }
  }]);
  return Home;
}(_react2.Component), _class2.propTypes = {
  users: _react2.PropTypes.array
}, _temp)) || _class));

exports.default = Home;
module.exports = exports['default'];