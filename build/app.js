"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const serverModel_1 = __importDefault(require("./models/server/serverModel"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.server = new serverModel_1.default();
exports.server.listen();
