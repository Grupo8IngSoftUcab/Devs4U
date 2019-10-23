'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyecto1 = sequelize.define('Proyecto1', {
    NM_Proyect: DataTypes.STRING,
    TP_Proyect: DataTypes.STRING,
    Stg_Proyect: DataTypes.STRING,
    Dp_Req: DataTypes.STRING,
    UsedTech: DataTypes.TEXT,
    Entregables: DataTypes.STRING,
    Ad_Dat: DataTypes.TEXT,
    contratistId: DataTypes.INTEGER,
    Desc: DataTypes.TEXT
  }, {});
  Proyecto1.associate = function(models) {
    // associations can be defined here
  };
  return Proyecto1;
};