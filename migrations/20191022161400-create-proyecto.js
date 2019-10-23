'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NM_Proyect: {
        type: Sequelize.STRING
      },
      TP_Proyect: {
        type: Sequelize.STRING
      },
      Stg_Proyect: {
        type: Sequelize.STRING
      },
      Dp_req: {
        type: Sequelize.STRING
      },
      UsedTech: {
        type: Sequelize.TEXT
      },
      Entregables: {
        type: Sequelize.STRING
      },
      Ad_Dat: {
        type: Sequelize.TEXT
      },
      contratistId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proyectos');
  }
};