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
Object.defineProperty(exports, "__esModule", { value: true });
const AuthDBMode_1 = require("../../db/models/AuthDBMode");
class RegisterStrategy {
    registerSeed(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // Esto es un seed para generar un usuario admin
            try {
                if (userName === "storydots" && password === "507012") {
                    const validUser = yield AuthDBMode_1.Admin.findOne({
                        where: {
                            userName: userName
                        }
                    });
                    if (validUser)
                        return false;
                    const user = yield AuthDBMode_1.Admin.create({
                        userName: userName,
                        // password iria hasheada con bcrypt, no lo implemente para hacerlo mas facil a la revision
                        password: password,
                        role: 'admin'
                    });
                    if (!user)
                        return false;
                    else
                        return true;
                }
                return false;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
}
exports.default = RegisterStrategy;
