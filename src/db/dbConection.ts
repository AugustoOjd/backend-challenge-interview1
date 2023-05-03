import {Sequelize}  from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()

import {dbConfig} from './dbConfig'

const { development: {username, password, database, host, dialect}} = dbConfig

// export const sequelize = new Sequelize(database!, username!, password, {
//     host: host,
//     dialect: 'postgres'
//   });

export const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}/${database}?ssl=true`) 