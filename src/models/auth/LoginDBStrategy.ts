import { IAuthContext } from "../../interfaces/IAuth";


export default class LoginStrategy implements IAuthContext{

    login(userName: string, password: string): boolean {
        console.log('login a db')
// validar login en db y retornar false o true
        if(userName === "admin" && password === "entrar") return true

        return false
    }
}