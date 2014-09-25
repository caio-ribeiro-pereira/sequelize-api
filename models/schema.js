var
  path = require("path"),
  fs = require("fs"),
  _ = require("lodash"),
  Sequelize = require("sequelize"),
  sequelize = null,
  schema = null
;

module.exports = function(app) {

  if (!schema) {
    if (!sequelize) {
      var cfg = require("../config/config.js");
      sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, cfg.mysql);
    }
    var db = {};
    fs.readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "schema.js");
      })
      .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach(function(model) {
      if ("associate" in db[model]) {
        db[model].associate(db)
      };
    });

    schema = _.extend({Sequelize: Sequelize, sequelize: sequelize}, db);
  }
  return schema;

};
