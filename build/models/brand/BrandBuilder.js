"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Brand_1 = __importDefault(require("./Brand"));
class BrandBuilder {
    constructor() {
        this.name = '';
        this.logo = '';
    }
    reset() {
        this.name = '',
            this.logo = '';
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setLogo(logo) {
        this.logo = logo;
        return this;
    }
    build() {
        const brand = new Brand_1.default(this.name, this.logo);
        this.reset();
        return brand;
    }
}
exports.default = BrandBuilder;
