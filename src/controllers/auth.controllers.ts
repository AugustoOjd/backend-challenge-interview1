import {Request, Response} from 'express'
import AuthService from '../services/auth.service'

const authService = new AuthService()

export const authLogin = async (req: Request, res: Response)=>{
    
    const {userName, password} = req.body
    try {
        const {user, xtoken} = await authService.loginAdmin(userName, password)

        return res.status(200).json({
            status: 'Success',
            payload: {
                user,
                xtoken
            }
        })
    } catch (error: any) {
        res.status(error.code).json({error})
    }
}

export const registerSeed = async (req: Request, res: Response)=>{
    const {userName, password} = req.body
    try {

        const data = await authService.createSeedAdmin(userName, password)

        return res.status(201).json({
            data: data.admin
        })
    } catch (error:any) {
        res.status(error.code).json({error})
    }
}