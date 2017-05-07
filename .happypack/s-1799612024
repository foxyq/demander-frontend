'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

exports.email = email;
exports.isEmail = isEmail;
exports.required = required;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.integer = integer;
exports.oneOf = oneOf;
exports.match = match;
exports.createValidator = createValidator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return Boolean(error);
    })[0];
  };
};

var checkEmail = function checkEmail(value) {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

function email(value) {
  if (!isEmpty(value) && checkEmail(value)) {
    return 'Invalid email address';
  }
}

function isEmail(value) {
  if (!isEmpty(value) && checkEmail(value)) {
    return false;
  }
  return true;
}

function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

function minLength(min) {
  return function (value) {
    if (!isEmpty(value) && value.length < min) {
      return 'Must be at least ' + min + ' characters';
    }
  };
}

function maxLength(max) {
  return function (value) {
    if (!isEmpty(value) && value.length > max) {
      return 'Must be no more than ' + max + ' characters';
    }
  };
}

function integer(value) {
  if (!(0, _isInteger2.default)(Number(value))) {
    return 'Must be an integer';
  }
}

function oneOf(enumeration) {
  return function (value) {
    if (enumeration.indexOf(value) !== -1) {
      return 'Must be one of: ' + enumeration.join(', ');
    }
  };
}

function match(field) {
  return function (value, data) {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};

    (0, _keys2.default)(rules).forEach(function (key) {
      // concat enables both functions and arrays of functions
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);

      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}