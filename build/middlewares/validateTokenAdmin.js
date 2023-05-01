"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWTAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthDBMode_1 = require("../db/models/AuthDBMode");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig_1 = require("../db/dbConfig");
const { development: { jwt_key } } = dbConfig_1.dbConfig;
const validateJWTAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { xtoken = '' } = req.cookies;
    if (!xtoken) {
        return res.status(401).json({ msg: 'not exists token' });
    }
    try {
        // Aca valido con nombre porque el id de pg es autoincremental entonces preferi tomar el nombre
        // pero se puede usar otro parametro para validar
        const decoded = jsonwebtoken_1.default.verify(xtoken, jwt_key);
        const user = yield AuthDBMode_1.Admin.findOne({
            where: {
                userName: decoded.xtoken
            }
        });
        if (!user) {
            return res.status(401).json({ msg: 'user undefined' });
        }
        if (user.role !== 'admin') {
            return res.status(401).json({ msg: 'User isnt admin' });
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ msg: 'access Denied' });
    }
});
exports.validateJWTAdmin = validateJWTAdmin;
