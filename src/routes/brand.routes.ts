import { Router } from "express";
import { addBrand } from "../controllers/brand.controllers";

const router = Router()


router.post('/', addBrand)


export default router