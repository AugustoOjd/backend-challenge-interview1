import {request, response} from 'express'
import ShoeService from '../services/shoe.service'
import { Shoe } from '../db/models/ShoeDBModel'


const shoeservice = new ShoeService()

export const getShoes = async (req = request, res= response)=>{
    const { limit = 6 } = req.query

    try {
        const data = await shoeservice.getShoes(Number(limit))

        return res.status(200).json({
            status: 'getall_Success',
            payload: data
        })
    } catch (error:any) {
        return res.status(error.code).json({error})
    }
}

export const getShoeBrand = async (req = request, res= response)=>{
    const {id, brandId} = req.params
    try {
        const data = await shoeservice.getBrandShoeById(Number(id), Number(brandId))

        return res.status(200).json({
            status: 'ShoeBrand_Success',
            payload: data
        })
    } catch (error:any ) {
        return res.status(error.code).json({error})
    }
}

export const getById = async (req = request, res= response)=>{
    const {id} = req.params

    try {
        
        const data = await shoeservice.getShoeById(Number(id))

        return res.status(200).json({
            status: 'get_id_success',
            payload: data
        })
    } catch (error: any) {
        return res.status(error.code).json({error})
    }
}


export const addShoe = async (req = request, res= response)=>{
    
    const { name, description, price, thumbnail} = req.body

    try {
        const data = await shoeservice.createShoe(name, description, price, thumbnail)

        return res.status(201).json({
            status: 'add_success',
            payload: data
        })
    } catch (error: any) {
        return res.status(error.code).json({error})
    }
}

export const updateById = async (req = request, res= response)=>{
    const {id} = req.params
    const newData = req.body
    try {

        const data = await shoeservice.updateById(Number(id), newData)
        
        return res.status(201).json({
            status: 'update_success',
            payload: data
        })
    } catch (error:any) {
        return res.status(error.code).json({error})
    }
}

export const deleteById = async (req = request, res= response)=>{
    const {id} = req.params
    
    try {

        const data = await shoeservice.deleteById(Number(id))
        
        return res.status(201).json({
            status: 'delete_success',
            payload: data
        })
    } catch (error: any) {
        return res.status(error.code).json({error})
    }
}