'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lruMemoize = require('lru-memoize');

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

var _validation = require('utils/validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = (0, _validation.createValidator)({
  name: _validation.required,
  email: [_validation.required, _validation.email],
  password: [_validation.required, (0, _validation.minLength)(6)]
});

exports.default = (0, _lruMemoize2.default)(10)(validator);
module.exports = exports['default'];