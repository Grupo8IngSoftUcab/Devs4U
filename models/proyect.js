'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyect = sequelize.define('Proyect', {
    NM_Proyect: DataTypes.STRING,
    Srg_Proyect: DataTypes.STRING,
    Dp_Req: DataTypes.STRING,
    UsedTech: DataTypes.TEXT,
    Entregables: DataTypes.STRING,
    Ad_Dat: DataTypes.TEXT,
    contratistId: DataTypes.INTEGER
  }, {});
  Proyect.associate = function(models) {
    // associations can be defined here
  };
  return Proyect;
};
//npx sequelize-cli model:generate --name Proyecto --attributes NM_Proyect:string,TP_Proyect:string,Srg_Proyect:string,Dp_Req:string,UsedTech:text, Entregables: string, Ad_Dat: text, contratistId: integer
//npx sequelize-cli model:generate --name developer --attributes workHours:integer,developerType:string,expierece:string,userId:integer
//npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string,password:string,aboutMe:string,residence:string,web:string,rol:string
//npx sequelize-cli model:generate --name iteracion --attributes ContractorCode:integer,Begining:timestamp,Ending:timestamp,IterationNumber:integer,IterationDesc:text
//npx sequelize-cli db:migrate
/*firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    residence: DataTypes.STRING,
    web: DataTypes.STRING,
    rol: DataTypes.STRING */