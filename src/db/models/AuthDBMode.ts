import { DataTypes } from 'sequelize'
import {sequelize} from '../dbConection';

export const Admin = sequelize.define('Admin', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
})


// `sequelize.define` also returns the model
// console.log(Admin === sequelize.models.User); // true