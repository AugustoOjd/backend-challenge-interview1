"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.setStrategy(strategy);
    }
    login(userName, password) {
        return this.strategy.login(userName, password);
    }
    registerSeed(userName, password) {
        return this.strategy.registerSeed(userName, password);
    }
}
exports.default = AuthContext;
