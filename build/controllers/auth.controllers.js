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
exports.registerSeed = exports.authLogin = void 0;
const auth_service_1 = __importDefault(require("../services/auth.service"));
const authService = new auth_service_1.default();
const authLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const { user, xtoken } = yield authService.loginAdmin(userName, password);
        return res.status(200).json({
            status: 'Success',
            payload: {
                user,
                xtoken
            }
        });
    }
    catch (error) {
        res.status(error.code).json({ error });
    }
});
exports.authLogin = authLogin;
const registerSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const data = yield authService.createSeedAdmin(userName, password);
        return res.status(201).json({
            data: data.admin
        });
    }
    catch (error) {
        res.status(error.code).json({ error });
    }
});
exports.registerSeed = registerSeed;
