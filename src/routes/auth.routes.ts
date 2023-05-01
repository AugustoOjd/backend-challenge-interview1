import { Router } from "express";
import { authLogin, registerSeed } from "../controllers/auth.controllers";

const router = Router()


router.post('/', authLogin)

router.post('/adminseed', registerSeed)

export default router