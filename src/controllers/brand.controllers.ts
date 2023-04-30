import {Request, Response} from 'express'
import BrandService from '../services/brand.service'

export const addBrand = async (req: Request, res: Response)=>{
    
    const {name, logo} = req.body
    
    try {
        const brandService = new BrandService()

        const data = await brandService.createBrand(name, logo)

        return res.status(200).json({
            status: 'Success - brand added',
            payload: data
        })

    } catch (error: any) {
        return res.status(error.code).json({error})
    }
}