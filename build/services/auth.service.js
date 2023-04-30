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
const AuthContext_1 = __importDefault(require("../models/auth/AuthContext"));
const LoginDBStrategy_1 = __importDefault(require("../models/auth/LoginDBStrategy"));
class AuthService {
    constructor() {
        this.authAdmin = new AuthContext_1.default(new LoginDBStrategy_1.default());
        this.error = '',
            this.code = 200;
    }
    errorController(message, code) {
        this.error = message;
        this.code = code;
    }
    loginAdmin(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authLogin = this.authAdmin.login(userName, password);
                if (!authLogin)
                    throw this.errorController('Invalid credentials', 404);
                // PREVIANMENTE VALIDADO EN LOGINDBSTRATEGY
                return {
                    user: userName,
                    token: 'token de jwt'
                };
            }
            catch (error) {
                throw {
                    msg: this.error,
                    code: this.code
                };
            }
        });
    }
}
exports.default = AuthService;
