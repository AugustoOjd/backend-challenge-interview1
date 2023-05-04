import {Router} from 'express'
import { getShoes, addShoe, deleteById, updateById, getById, getShoeBrand } from '../controllers/shoe.controllers'
import { validateJWTAdmin } from '../middlewares/validateTokenAdmin'

const router = Router()

router.get('/', getShoes)

router.get('/:id', getById)

router.get('/:id/brand/:brandId', getShoeBrand)

// validateJWTAdmin, este middlware iria en las peticiones put, creat y delete pero tuve algunos incovenientes con el jwt !!!!

router.post('/', addShoe)

router.put('/:id', updateById)

router.delete('/:id', deleteById )



export default router