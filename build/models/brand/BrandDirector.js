"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrandDirector {
    constructor(brandBuilder) {
        this.brandBuilder = brandBuilder;
    }
    setBrandBuilder(brandBuilder) {
        this.brandBuilder = brandBuilder;
    }
    createBrand(name, logo) {
        this.brandBuilder.setName(name)
            .setLogo(logo);
    }
}
exports.default = BrandDirector;
