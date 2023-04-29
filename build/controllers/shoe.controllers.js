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
exports.addShoe = exports.getShoes = void 0;
const express_1 = require("express");
const shoe_service_1 = __importDefault(require("../services/shoe.service"));
const shoeservice = new shoe_service_1.default();
const getShoes = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send('getShoes ok');
    }
    catch (error) {
        return res.status(404).json({ error });
    }
});
exports.getShoes = getShoes;
const addShoe = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, thumbnail } = req.body;
    try {
        const data = yield shoeservice.createShoe(name, description, price, thumbnail);
        return res.status(201).json({
            status: 'Success',
            payload: data
        });
    }
    catch (error) {
        return res.status(404).json({ error });
    }
});
exports.addShoe = addShoe;
