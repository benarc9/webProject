var {Sequelize} = require('sequelize');


class Database{
    constructor(){}

    async authenticate(){
        await Database.seql.authenticate().then(
            () => {
                console.log('**Auth Success**');
            },
            () => {
                console.error('**Auth Failed**');
            }
        );
    }
}

Database.seql = new Sequelize('data', 'root', 'Ssgong01', {
    host: 'localhost',
    port: '9917',
    dialect: 'mysql'
});

module.exports = Database;