import { Admin } from "../../db/models/AuthDBMode";
import { IAuthContext } from "../../interfaces/IAuth";


export default class LoginStrategy implements IAuthContext{

    async login(userName: string, password: string): Promise<boolean> {
    // validar login en db y retornar false o true
    try {
        // if(userName !== "storydots" && password !== "507012") return false
        const loginAdmin = await Admin.findOne({
            where: {
                userName: userName,
                password: password
            }
        })

        if(!loginAdmin) return false

        return true

    } catch (error) {
        return false
    }

    }
}