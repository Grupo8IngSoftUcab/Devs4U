'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proyects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NM_Proyect: {
        type: Sequelize.STRING
      },
      Srg_Proyect: {
        type: Sequelize.STRING
      },
      Dp_Req: {
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
    return queryInterface.dropTable('Proyects');
  }
};