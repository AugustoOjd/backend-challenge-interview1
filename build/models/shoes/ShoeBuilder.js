"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shoe_1 = __importDefault(require("./Shoe"));
class ShoeBuilder {
    constructor() {
        this.name = '',
            this.description = '',
            this.price = 0;
        this.brand = '';
        this.thumbnail = '';
    }
    reset() {
        this.name = '',
            this.description = '',
            this.price = 0;
        this.brand = '';
        this.thumbnail = '';
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescripton(description) {
        this.description = description;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setBrand(brand) {
        this.brand = brand;
        return this;
    }
    setImage(img) {
        this.thumbnail = img;
        return this;
    }
    build() {
        const regularShoe = new Shoe_1.default(this.name, this.description, this.price, this.brand, this.thumbnail);
        this.reset();
        return regularShoe;
    }
}
exports.default = ShoeBuilder;
