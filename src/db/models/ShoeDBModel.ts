import { DataTypes } from 'sequelize'
import {sequelize} from '../dbConection';
import { Brand } from './BrandDBModel';

export const Shoe = sequelize.define('Shoe', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
});

Brand.hasOne(Shoe, {
    foreignKey: 'brandId',
    sourceKey: 'id'
})

Shoe.belongsTo(Brand, {
    foreignKey: 'brandId',
    targetKey: 'id'
})


// `sequelize.define` also returns the model
// console.log(Shoe === sequelize.models.User); // true