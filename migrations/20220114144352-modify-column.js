'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users', //table name
      'new_field', //new field
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