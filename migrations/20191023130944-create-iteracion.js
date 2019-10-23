'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('iteracions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ContractorCode: {
        type: Sequelize.INTEGER
      },
      Begining: {
        type: Sequelize.DATE
      },
      Ending: {
        type: Sequelize.DATE
      },
      IterationNumber: {
        type: Sequelize.INTEGER
      },
      IterationDesc: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('iteracions');
  }
};