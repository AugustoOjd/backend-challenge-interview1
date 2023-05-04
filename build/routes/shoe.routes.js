"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shoe_controllers_1 = require("../controllers/shoe.controllers");
const router = (0, express_1.Router)();
router.get('/', shoe_controllers_1.getShoes);
router.get('/:id', shoe_controllers_1.getById);
router.get('/:id/brand/:brandId', shoe_controllers_1.getShoeBrand);
// validateJWTAdmin, este middlware iria en las peticiones put, creat y delete pero tuve algunos incovenientes con el jwt !!!!
router.post('/', shoe_controllers_1.addShoe);
router.put('/:id', shoe_controllers_1.updateById);
router.delete('/:id', shoe_controllers_1.deleteById);
exports.default = router;
