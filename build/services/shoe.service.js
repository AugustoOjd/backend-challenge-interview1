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
const BrandDBModel_1 = require("../db/models/BrandDBModel");
const ShoeDBModel_1 = require("../db/models/ShoeDBModel");
const ShoeBuilder_1 = __importDefault(require("../models/shoes/ShoeBuilder"));
const ShoeDirector_1 = __importDefault(require("../models/shoes/ShoeDirector"));
class ShoeService {
    constructor() {
        this.shoeBuilder = new ShoeBuilder_1.default();
        this.shoeDirector = new ShoeDirector_1.default(this.shoeBuilder);
        this.error = '';
        this.code = 200;
    }
    errorController(message, code) {
        this.error = message;
        this.code = code;
    }
    getShoes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shoes = yield ShoeDBModel_1.Shoe.findAll();
                if (!shoes)
                    throw this.errorController('shoes not found', 500);
                return {
                    data: shoes
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
    getShoeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id)
                    throw this.errorController('id is require', 404);
                const shoe = yield ShoeDBModel_1.Shoe.findByPk(id);
                if (!shoe)
                    throw this.errorController('shoe not found', 404);
                return {
                    data: shoe
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
    getBrandShoeById(id, brandId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id || !brandId)
                    throw this.errorController('ids are require', 404);
                const brandShoe = yield BrandDBModel_1.Brand.findOne({
                    where: {
                        id: brandId
                    }
                });
                if (!brandShoe)
                    throw this.errorController('brand not found', 404);
                return {
                    data: brandShoe
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
    createShoe(name, description, price, thumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !description || !price || !thumbnail)
                    throw this.errorController('All fields are require', 404);
                const randomBrand = Math.floor(Math.random() * (3 - 1 + 1) + 1);
                this.shoeDirector.createShoe(name, description, price, randomBrand, thumbnail);
                const shoe = this.shoeBuilder.build();
                const createInDB = yield ShoeDBModel_1.Shoe.create(Object.assign({}, shoe));
                if (!createInDB)
                    throw this.errorController('Error save in DB', 500);
                return {
                    data: shoe
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
    updateById(id, newAtributes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id)
                    throw this.errorController('id is require', 404);
                const shoe = yield ShoeDBModel_1.Shoe.findOne({
                    where: {
                        id: id
                    }
                });
                if (!shoe)
                    throw this.errorController('shoe not found', 404);
                shoe.set(newAtributes);
                shoe.save();
                return {
                    data: shoe
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
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // delete puede cambiar el estado de un producto a false, sin eliminarlo
            // pero voy aplicar el delete literal como pide el challenge
            try {
                if (!id)
                    throw this.errorController('id is require', 404);
                const shoe = yield ShoeDBModel_1.Shoe.destroy({
                    where: {
                        id: id
                    }
                });
                if (!shoe)
                    throw this.errorController('shoe not found', 404);
                return {
                    data: shoe
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
exports.default = ShoeService;
