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
exports.deleteById = exports.updateById = exports.addShoe = exports.getById = exports.getShoeBrand = exports.getShoes = void 0;
const express_1 = require("express");
const shoe_service_1 = __importDefault(require("../services/shoe.service"));
const shoeservice = new shoe_service_1.default();
const getShoes = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 6 } = req.query;
    try {
        const data = yield shoeservice.getShoes(Number(limit));
        return res.status(200).json({
            status: 'getall_Success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.getShoes = getShoes;
const getShoeBrand = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, brandId } = req.params;
    try {
        const data = yield shoeservice.getBrandShoeById(Number(id), Number(brandId));
        return res.status(200).json({
            status: 'ShoeBrand_Success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.getShoeBrand = getShoeBrand;
const getById = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield shoeservice.getShoeById(Number(id));
        return res.status(200).json({
            status: 'get_id_success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.getById = getById;
const addShoe = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, thumbnail } = req.body;
    try {
        const data = yield shoeservice.createShoe(name, description, price, thumbnail);
        return res.status(201).json({
            status: 'add_success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.addShoe = addShoe;
const updateById = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newData = req.body;
    try {
        const data = yield shoeservice.updateById(Number(id), newData);
        return res.status(201).json({
            status: 'update_success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.updateById = updateById;
const deleteById = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield shoeservice.deleteById(Number(id));
        return res.status(201).json({
            status: 'delete_success',
            payload: data
        });
    }
    catch (error) {
        return res.status(error.code).json({ error });
    }
});
exports.deleteById = deleteById;
