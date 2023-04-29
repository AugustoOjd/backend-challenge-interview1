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
    getShoes(limit) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getShoeById(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    createShoe(name, description, price, thumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !description || !price || !thumbnail)
                    throw this.errorController('All fields are require', 404);
                this.shoeDirector.createShoe(name, description, price, 'brand id in tabla', 'link img');
                const shoe = this.shoeBuilder.build();
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
    updateById(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // delete puede cambiar el estado de un producto a false, sin eliminarlo
            // pero voy aplicar el delete literal como pide el challenge
        });
    }
}
exports.default = ShoeService;
