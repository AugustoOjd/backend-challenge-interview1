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
class LoginStrategy {
    login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // validar login en db y retornar false o true
            try {
                // if(userName !== "storydots" && password !== "507012") return false
                const loginAdmin = yield AuthDBMode_1.Admin.findOne({
                    where: {
                        userName: userName,
                        password: password
                    }
                });
                if (!loginAdmin)
                    return false;
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = LoginStrategy;
