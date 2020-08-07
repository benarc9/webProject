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
                user.password = user.password && user.password != "" ? BC.hashSync(user.password, 10) : "";
            }
            
        }
    }
} );

// Load hash from the db, which was preivously stored BC.compare(myPlaintextPassword, hash, function(err, res) {
  // if res == true, password matched
  // else wrong password
//});
//https://medium.com/@manishsundriyal/a-quick-way-for-hashing-passwords-using-bcrypt-with-nodejs-8464f9785b67

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