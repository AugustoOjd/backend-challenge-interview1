import {request, response} from 'express'
import ShoeService from '../services/shoe.service'


const shoeservice = new ShoeService()

export const getShoes = async (req = request, res= response)=>{
    try {
        
        return res.send('getShoes ok')
    } catch (error) {
        return res.status(404).json({error})
    }
}


export const addShoe = async (req = request, res= response)=>{
    
    const { name, description, price, thumbnail} = req.body

    try {
        const data = await shoeservice.createShoe(name, description, price, thumbnail)

        return res.status(201).json({
            status: 'Success',
            payload: data
        })
    } catch (error) {
        return res.status(404).json({error})
    }
}