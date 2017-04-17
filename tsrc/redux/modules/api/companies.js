'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;
exports.getCompanies = getCompanies;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_COMPANIES = 'api/companies/GET_COMPANIES';
var GET_COMPANIES_SUCCESS = 'api/companies/GET_COMPANIES_SUCCESS';
var GET_COMPANIES_FAIL = 'api/companies/GET_COMPANIES_FAIL';

var initialState = {
  getCompanies: {
    success: false,
    isLoading: false,
    error: null,
    data: []
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    // ------------------------------------
    // GET ALL COMPANIES
    // ------------------------------------
    case GET_COMPANIES:
      return (0, _extends3.default)({}, state, {
        getCompanies: (0, _extends3.default)({}, state.getCompanies, {
          isLoading: true,
          data: []
        })
      });
    case GET_COMPANIES_SUCCESS:
      return (0, _extends3.default)({}, state, {
        getCompanies: (0, _extends3.default)({}, state.getCompanies, {
          isLoading: false,
          success: true,
          data: action.result
        })
      });
    case GET_COMPANIES_FAIL:
      return (0, _extends3.default)({}, state, {
        getCompanies: (0, _extends3.default)({}, state.getCompanies, {
          isLoading: false,
          error: 'ERR GET_COMPANIES'
        })
      });
    // ------------------------------------
    // GET COMPANY
    // ------------------------------------


    default:
      return state;
  }
}

function getCompanies() {
  return {
    types: [GET_COMPANIES, GET_COMPANIES_SUCCESS, GET_COMPANIES_FAIL],
    promise: function promise(client) {
      return client.get('api/companies');
    }
  };
}