const spawn = require('child_process').spawn;
const manager = require('./downloadManager');

module.exports = function execute(version, args, cb) {
  const versionPath = manager.getVersionPath(version);
  const composer = spawn('php', [versionPath].concat(args));

  composer.stdout.on('data', (data) => {
    console.log(data.toString());
  });
  composer.stderr.on('data', (data) => {
    console.error(data.toString());
  });
  composer.on('close', () => {
    if (cb) {
      cb();
    }
  });
};
