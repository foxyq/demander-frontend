'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enumize(enumDefinition) {
  var byId = {};
  var list = [];
  var key = void 0;
  var temp = void 0;

  for (key in enumDefinition) {
    if (enumDefinition.hasOwnProperty(key)) {
      temp = (0, _assign2.default)({}, enumDefinition[key]);
      delete temp.id;
      temp[key] = key;
      list.push({
        label: enumDefinition[key].label,
        value: enumDefinition[key].id
      });
      byId[enumDefinition[key].id] = temp;
    }
  }
  enumDefinition.ids = byId;
  enumDefinition.list = list;
  return enumDefinition;
}

exports.EXAMPLE = enumize({
  PARTICIPANT: { id: 1, u: 'participant' },
  LEADER: { id: 2, u: 'leader' },
  NAO_STAFF: { id: 3, u: 'naa_oa_staff' },
  ALL: { id: 0, u: 'all' }
});