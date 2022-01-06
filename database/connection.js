const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "user_feedback",
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: 0,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
    }
)

const db = {}
db.sequelize = sequelize
db.userModel = require('../models/userModel')(sequelize, Sequelize)
module.exports = db