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
const BrandBuilder_1 = __importDefault(require("../models/brand/BrandBuilder"));
const BrandDirector_1 = __importDefault(require("../models/brand/BrandDirector"));
class BrandService {
    constructor() {
        this.brandBuilder = new BrandBuilder_1.default();
        this.brandDirector = new BrandDirector_1.default(this.brandBuilder);
        this.error = '';
        this.code = 200;
    }
    errorController(message, code) {
        this.error = message;
        this.code = code;
    }
    createBrand(name, logo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !logo)
                    throw this.errorController('inputs require', 404);
                const brand = yield BrandDBModel_1.Brand.create({
                    name: name,
                    logo: logo
                });
                return {
                    data: brand
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
exports.default = BrandService;
