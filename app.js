var express = require('express')
  , load = require('express-load')
  , app = express()
;

load('middlewares')
  .then('models/schema.js')
  .then('controllers')
  .then('routes')
  .then('boot.js')
  .into(app);

module.exports = app;