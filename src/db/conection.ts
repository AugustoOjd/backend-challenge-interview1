import {Sequelize}  from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()

const { DB_NAME,
        USERNAME,
        SECRET_PASSWORD,
        HOST
    } = process.env


// export const sequelize = new Sequelize(DB_NAME!, USERNAME!, SECRET_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

export const sequelize = new Sequelize(`postgres://${USERNAME}:${SECRET_PASSWORD}@${HOST}:5432/${DB_NAME}`)

