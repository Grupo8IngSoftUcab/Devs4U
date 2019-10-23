'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define('Proyecto', {
    NM_Proyect: DataTypes.STRING,
    TP_Proyect: DataTypes.STRING,
    Stg_Proyect: DataTypes.STRING,
    Dp_req: DataTypes.STRING,
    UsedTech: DataTypes.TEXT,
    Entregables: DataTypes.STRING,
    Ad_Dat: DataTypes.TEXT,
    contratistId: DataTypes.INTEGER
  }, {});
  Proyecto.associate = function(models) {
    // associations can be defined here
  };
  return Proyecto;
};