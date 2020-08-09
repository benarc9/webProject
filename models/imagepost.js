var {Sequelize, DataTypes} = require('sequelize');

var Database = require('../db');

const Image = Database.seql.define('PostImage', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    userID: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT('small')
    },
    imageName: {
        type: DataTypes.STRING,
        unique: true
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
