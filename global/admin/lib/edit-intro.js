var intro = require('../../../lib/models/intro-model.js'),
  _ = require('lodash'),
  path = require('path'),
  fs = require('fs-extra'),
  util = require('./util.js');

var cwd = process.cwd();

module.exports = function (app) {

  app.get('/edit-intro', function (req, res) {
    res.render('edit-intro', {
      intro : intro
    });
  });

  //app.post('/edit-intro', editIteration(function (subapp) {
  //  return function (req, res) {
  //    var meta = {
  //      h1 : req.body.h1,
  //      description : req.body.description
  //    };
//
  //    var newPath = path.join(cwd, 'app', req.body.path);
  //    fs.writeJsonSync(
  //        path.join(cwd, 'app', req.params.iteration, 'meta.json'), meta);
  //    fs.rename(path.join(cwd, 'app', req.params.iteration), newPath);
//
  //    res.redirect('../../');
  //    util.restartApp();
  //  };
  //}));

}