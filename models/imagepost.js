var {Sequelize, DataTypes} = require('sequelize');

var Database = require('../db');

const Image = Database.seql.define('Image', {
    userID: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    description: {
        type: DataTypes.TEXT('small')
    },
    imageName: {
        type: DataTypes.STRING
    }
} );

(async() => {
    Database.seql.sync().then(
        () => {
            console.log('**Image Sync Success**');
        },
        () => {
            console.error('**Image Sync Failed**');
        }
    );
})();

module.exports = Image;