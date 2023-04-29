import {Router} from 'express'
import { getShoes, addShoe } from '../controllers/shoe.controllers'

const router = Router()

router.get('/', getShoes)

router.post('/', addShoe)

export default router