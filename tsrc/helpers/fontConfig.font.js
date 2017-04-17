'use strict';

var glob = require('glob').sync;
var loadDir = glob('./src/assets/iconfont/**/*.svg');
var loadDirArr = Array.prototype.slice.apply(loadDir);
var iconsInDir = loadDirArr.map(function (elem) {
  return '../' + elem.replace('./src/', '');
});

var fontConfig = {
  fontName: 'iconfont',
  files: iconsInDir,
  baseClass: 'ico',
  classPrefix: 'ico--',
  fixedWidth: true
};

module.exports = fontConfig;