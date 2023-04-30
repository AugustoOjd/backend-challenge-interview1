import { Request, Response, NextFunction } from "express"


export const validateJWTAdmin = async (req: Request, res: Response, next: NextFunction) =>{

    const { xtoken = '' } = req.cookies

    

}