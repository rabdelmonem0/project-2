require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// process.env.DB_NAME,
// process.env.DB_USER,
// process.env.DB_PASSWORD,
// {
//     host: '127.0:3306',
//     dialect: 'mysql',
//     port: 3001,
//     logging: false,
// }

module.exports = sequelize;
