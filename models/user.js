var {Sequelize, DataTypes} = require('sequelize');

var Database = require('../db');

const User = Database.seql.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.CHAR
    },
    password: {
        type: DataTypes.CHAR
    }
} );

(async() => {
    Database.seql.sync().then(
        () => {
            console.log('**User Sync Success**');
        },
        () => {
            console.error('**User Sync Failed**');
        }
    );
})();

module.exports = User;