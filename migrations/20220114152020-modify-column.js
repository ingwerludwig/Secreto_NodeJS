'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'new_field', {
      type: Sequelize.BOOLEAN,
      defaultValue: Sequelize.BOOLEAN
    });
  },
  down: function(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Users',
      'new_field'
    );
  }
};