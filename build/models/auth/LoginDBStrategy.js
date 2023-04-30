"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginStrategy {
    login(userName, password) {
        console.log('login a db');
        // validar login en db y retornar false o true
        if (userName === "admin" && password === "entrar")
            return true;
        return false;
    }
}
exports.default = LoginStrategy;
