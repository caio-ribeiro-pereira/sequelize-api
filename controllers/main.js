module.exports = function(app) {
  
  var User = app.models.schema.User
    , Address = app.models.schema.Address
  ;

  var MainController = {
    index: function(req, res) {
      // SELECT u.*, a.* FROM users u INNER JOIN address a ON u.id = a.user_id;
      User.findAll({
        include: [Address]
      }).success(function(users) {
        res.send(users);
      });
    },
    create: function(req, res) {
      User.create({
        nome: req.body.nome
      , email: req.body.email
      }).success(function(user) {
        Address.create({
          logradouro: req.body.logradouro
        , numero: req.body.numero
        , bairro: req.body.bairro
        , cidade: req.body.cidade
        , estado: req.body.estado
        , cep: req.body.cep
        , user_id: user.id
        }).success(function(address) {
          res.status(200).end();
        });
      });
    }
  };

  return MainController;
}