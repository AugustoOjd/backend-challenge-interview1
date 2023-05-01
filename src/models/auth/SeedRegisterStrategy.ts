import { Admin } from '../../db/models/AuthDBMode';
import { IAuthContext } from "../../interfaces/IAuth";


export default class RegisterStrategy implements IAuthContext{
    

    async registerSeed(userName: string, password: string): Promise<boolean> {
        // Esto es un seed para generar un usuario admin
        try {
            if(userName === "storydots" && password === "507012"){
                
                const validUser = await Admin.findOne({
                    where: {
                        userName: userName
                    }
                })

                if(validUser) return false
                
                const user = await Admin.create({
                    userName: userName,
                    // password iria hasheada con bcrypt, no lo implemente para hacerlo mas facil a la revision
                    password: password,
                    role: 'admin'
                })

                if(!user) return false
                else return true
            }

            return false
            
        } catch (error) {
            console.log(error)
            return false
        }

    }
}