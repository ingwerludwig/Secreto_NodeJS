'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("user",
      {
        name: {
          type: Sequelize.STRING(256),
          allowNull: false,
          primaryKey: true
      },
        message: {
          type: Sequelize.STRING(256),
          allowNull: false        
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user")
  }
};