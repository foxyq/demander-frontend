'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _class, _temp2;

var _reduxForm = require('redux-form');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _textArea = require('./text-area.styl');

var _textArea2 = _interopRequireDefault(_textArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Input: {
    displayName: 'Input'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/components/fields/TextArea/TextArea.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Input = _wrapComponent('Input')((_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, field) {
      if (_this.props.onInputChange) {
        _this.props.onInputChange(e.target.value);
      }
      field.input.onChange(e.target.value);
    }, _this.autoGrow = function (element) {
      element.style.height = '5px';
      element.style.height = element.scrollHeight + 'px';
    }, _this.renderField = function (field) {
      // const { type } = this.props
      var meta = field.meta,
          input = field.input;


      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)((0, _defineProperty3.default)({}, _textArea2.default.container, true))
          },
          _react3.default.createElement('textarea', (0, _extends3.default)({
            // className="form-control `${style.textArea}`"
            className: (0, _classnames2.default)('form-control', _textArea2.default.textArea)
            // className={style.container}
            , rows: 5
          }, input, {
            // type={'textarea'}
            onChange: function onChange(e) {
              return _this.handleChange(e, field);
            }
          })),
          meta.touched && meta.error && _react3.default.createElement(
            'span',
            { className: 'form-control-error' },
            meta.error
          )
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name;


      return _react3.default.createElement(
        'div',
        { className: 'form-group' },
        _react3.default.createElement(
          'label',
          { htmlFor: name, className: 'control-label' },
          label
        ),
        _react3.default.createElement(_reduxForm.Field, { id: name, name: name, component: this.renderField })
      );
    }
  }]);
  return Input;
}(_react2.Component), _class.propTypes = {
  onInputChange: _react3.default.PropTypes.func,
  label: _react3.default.PropTypes.string.isRequired,
  name: _react3.default.PropTypes.string.isRequired,
  type: _react3.default.PropTypes.string
}, _temp2));

exports.default = Input;
module.exports = exports['default'];