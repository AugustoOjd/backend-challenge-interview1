"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoe = void 0;
const sequelize_1 = require("sequelize");
const dbConection_1 = require("../dbConection");
const BrandDBModel_1 = require("./BrandDBModel");
exports.Shoe = dbConection_1.sequelize.define('Shoe', {
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    thumbnail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
// Other model options go here
});
BrandDBModel_1.Brand.hasOne(exports.Shoe, {
    foreignKey: 'brandId',
    sourceKey: 'id'
});
exports.Shoe.belongsTo(BrandDBModel_1.Brand, {
    foreignKey: 'brandId',
    targetKey: 'id'
});
// `sequelize.define` also returns the model
// console.log(Shoe === sequelize.models.User); // true
