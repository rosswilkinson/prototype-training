var glob = require('glob-all'),
  path = require('path'),
  fs = require('fs-extra');

var cwd = process.cwd();

// this is a lazily-instantiated and cached array of the app models
var model = (function () {
  //Do we need to return an array?

  var jsn = fs.readJsonSync(path.join(cwd + '/global/admin', 'meta.json'));
  return jsn;

})();

module.exports = model;