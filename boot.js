module.exports = function(app) {
  
  var sequelize = app.models.schema.sequelize,
      port = process.env.PORT || 3000,
      env = process.env.NODE_ENV
  ;

  sequelize.sync().done(function() {
    app.listen(port, function() {
      console.log("Sequelize API: %s env into port %s", env, port);
    });
  });
  
};