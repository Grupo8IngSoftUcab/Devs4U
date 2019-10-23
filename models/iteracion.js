'use strict';
module.exports = (sequelize, DataTypes) => {
  const iteracion = sequelize.define('iteracion', {
    ContractorCode: DataTypes.INTEGER,
    Begining: DataTypes.DATE,
    Ending: DataTypes.DATE,
    IterationNumber: DataTypes.INTEGER,
    IterationDesc: DataTypes.TEXT
  }, {});
  iteracion.associate = function(models) {
    // associations can be defined here
  };
  return iteracion;
};