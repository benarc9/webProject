var {Sequelize, DataTypes} = require('sequelize');
const BC = require('bcrypt');

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
        type: DataTypes.STRING
    }
},
{
    hooks: {
        beforeCreate : (user , options) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
            }
            
        }
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