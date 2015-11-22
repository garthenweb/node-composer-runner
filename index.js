const version = require('./lib/version')();
const manager = require('./lib/downloadManager');
const execute = require('./lib/execute');

module.exports = {
  version,
  manager,
  execute,
};
