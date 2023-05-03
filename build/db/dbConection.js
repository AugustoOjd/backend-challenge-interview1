"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig_1 = require("./dbConfig");
const { development: { username, password, database, host, dialect } } = dbConfig_1.dbConfig;
// export const sequelize = new Sequelize(database!, username!, password, {
//     host: host,
//     dialect: 'postgres'
//   });
exports.sequelize = new sequelize_1.Sequelize(`${dialect}://${username}:${password}@${host}/${database}?ssl=true`);
