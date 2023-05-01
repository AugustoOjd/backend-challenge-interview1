import {Router} from 'express'
import { getShoes, addShoe, deleteById, updateById, getById } from '../controllers/shoe.controllers'
import { validateJWTAdmin } from '../middlewares/validateTokenAdmin'

const router = Router()

router.get('/', getShoes)

router.get('/:id', getById)

router.post('/',validateJWTAdmin, addShoe)

router.put('/:id', validateJWTAdmin, updateById)

router.delete('/:id', validateJWTAdmin, deleteById )



export default router