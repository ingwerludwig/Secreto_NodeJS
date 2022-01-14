'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'new_field',
     Sequelize.BOOLEAN
    );

  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'new_field'
    );
  }
}