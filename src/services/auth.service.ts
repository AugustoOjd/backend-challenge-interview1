import AuthContext from "../models/auth/AuthContext"
import LoginStrategy from "../models/auth/LoginDBStrategy"


export default class AuthService {

    private authAdmin

    error: string
    code: number

    constructor(){
        this.authAdmin = new AuthContext(new LoginStrategy())
        this.error = '',
        this.code = 200
    }

    errorController(message: string, code: number) {
        this.error = message;
        this.code = code
    }

    async loginAdmin(userName: string, password: string){
        try {
            const authLogin = this.authAdmin.login(userName, password)

            if(!authLogin) throw this.errorController('Invalid credentials', 404)
    // PREVIANMENTE VALIDADO EN LOGINDBSTRATEGY
            return {
                user: userName,
                token: 'token de jwt'
            }

        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }
}