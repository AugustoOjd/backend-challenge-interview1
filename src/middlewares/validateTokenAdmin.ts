import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Admin } from '../db/models/AuthDBMode';
import dotenv from 'dotenv';
dotenv.config()

import {dbConfig} from '../db/dbConfig'

const { development: {jwt_key}} = dbConfig


export const validateJWTAdmin = async (req: Request, res: Response, next: NextFunction) =>{

    const {xtoken} = req.cookies
    try {

        if(!xtoken) return res.status(401).json({msg: 'not exists token'})
    
        // Aca valido con nombre porque el id de pg es autoincremental entonces preferi tomar el nombre
        // pero se puede usar otro parametro para validar
        const decoded = jwt.verify( xtoken as string, jwt_key!) as JwtPayload
        
        const user: any = await Admin.findOne({
            where: {
                userName: decoded.xtoken
            }
        })
        
        if(!user){
            return res.status(401).json({ msg: 'user undefined'})
        }
        
        if(user.role !== 'admin'){
            return res.status(401).json({ msg: 'User isnt admin'})
        }

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: 'access Denied'})
    }

}