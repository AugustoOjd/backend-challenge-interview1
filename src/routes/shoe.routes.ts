import {Router} from 'express'
import { getShoes, addShoe } from '../controllers/shoe.controllers'

const router = Router()

router.get('/', getShoes)

router.get('/:id')

router.post('/', addShoe)

router.put('/:id')

router.delete('/:id')



export default router