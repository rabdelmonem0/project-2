const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Userjj extends Model{}

Userjj.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        bio: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Userjj',
    }
)

module.exports = Userjj;