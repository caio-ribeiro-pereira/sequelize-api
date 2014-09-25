module.exports = function(sequelize, DataType) {

  var Address = sequelize.define('Address', {
    logradouro: DataType.STRING,
    numero: DataType.INTEGER,
    bairro: DataType.STRING,
    cidade: DataType.STRING,
    estado: DataType.STRING,
    cep: DataType.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Address.belongsTo(models.User);
      }
    }
  });

  return Address;

};
