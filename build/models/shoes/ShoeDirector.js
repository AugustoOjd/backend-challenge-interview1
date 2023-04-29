"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoeDirector {
    constructor(shoeBuilder) {
        this.shoeBuilder = shoeBuilder;
    }
    setShoeBuilder(shoeBuilder) {
        this.shoeBuilder = shoeBuilder;
    }
    createShoe(name, description, price, brandId, thumbnail) {
        this.shoeBuilder.setName(name)
            .setDescripton(description)
            .setPrice(price)
            .setBrand(brandId)
            .setImage(thumbnail);
    }
}
exports.default = ShoeDirector;
