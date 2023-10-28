const Sequelize = require("sequelize");
const sequelize = new Sequelize('exo', 'root', 'Wahid@0646',{
    dialect: "mysql",
    host: "localhost",
 });

module.exports = sequelize;
