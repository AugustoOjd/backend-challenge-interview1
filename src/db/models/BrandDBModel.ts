import { DataTypes } from 'sequelize'
import {sequelize} from '../dbConection';
import { Shoe } from './ShoeDBModel';

export const Brand = sequelize.define('Brand', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
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
console.log(Brand === sequelize.models.User); // true