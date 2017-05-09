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

var _reactScrollableAnchor = require('react-scrollable-anchor');

var Scroll = _interopRequireWildcard(_reactScrollableAnchor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Gototop: {
    displayName: 'Gototop'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/elements/Gototop/Gototop.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Gototop = _wrapComponent('Gototop')(function (_Component) {
  (0, _inherits3.default)(Gototop, _Component);

  function Gototop() {
    (0, _classCallCheck3.default)(this, Gototop);
    return (0, _possibleConstructorReturn3.default)(this, (Gototop.__proto__ || Object.getPrototypeOf(Gototop)).apply(this, arguments));
  }

  (0, _createClass3.default)(Gototop, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'a',
        {
          href: Scroll.goToTop(),
          id: 'goToTop',
          className: 'btn btn-primary btn-fab btn-round'
        },
        '^'
      );
    }
  }]);
  return Gototop;
}(_react2.Component));

exports.default = Gototop;
module.exports = exports['default'];