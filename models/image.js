var { Sequelize, DataTypes } = require('sequelize');

var Database = require('../db');

const Image = Database.seql.define('Image', {
	imageId: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false
	},
	userId:
	{
		type: DataTypes.STRING,
		allowNull: false
	}
});

(async () => {
	Database.seql.sync().then(
		() => {
			console.log('**Created Image Table');
		},
		() => {
			console.error('**Image Table Found**');
		}
	);
})();

module.exports = Image;
