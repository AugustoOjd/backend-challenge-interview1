"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_controllers_1 = require("../controllers/brand.controllers");
const router = (0, express_1.Router)();
router.post('/', brand_controllers_1.addBrand);
exports.default = router;
