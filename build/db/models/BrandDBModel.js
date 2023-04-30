"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const sequelize_1 = require("sequelize");
const dbConection_1 = require("../dbConection");
exports.Brand = dbConection_1.sequelize.define('Brand', {
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
    logo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
// Other model options go here
});
// Brand.hasMany(Shoe, {
//     foreignKey: 'shoeId',
//     sourceKey: 'id'
// })
// Shoe.belongsTo(Brand, {
//     foreignKey: 'shoeId',
//     targetKey: 'id'
// })
// `sequelize.define` also returns the model
console.log(exports.Brand === dbConection_1.sequelize.models.User); // true
