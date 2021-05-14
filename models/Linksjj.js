const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Links extends Model {}

Links.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        timestamps: false,
        modelName: 'links'
    }
)

module.exports = Links;