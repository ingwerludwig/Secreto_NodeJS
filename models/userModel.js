module.exports = (sequelize, Sequelize) => { 
    const user = sequelize.define("user",{
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
    return user
}