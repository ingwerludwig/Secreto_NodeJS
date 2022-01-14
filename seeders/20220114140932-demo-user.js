'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('users', [{
        id:'1abc',
        name: "Ingwer Ludwig",
        message: "Hello!",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};