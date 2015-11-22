'use strict';

const path = require('path');

// find package json in current directory or fallback to this difinition
let pkg;
try {
  const packageFolder = path.join(process.cwd(), 'package.json');
  pkg = require(packageFolder);
} catch (e) {
  pkg = require('../package.json');
}

const version = pkg.engines.composer;
module.exports = function getVersion() {
  return version;
};
