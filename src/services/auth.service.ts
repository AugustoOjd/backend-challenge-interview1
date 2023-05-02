import AuthContext from "../models/auth/AuthContext"
import LoginStrategy from "../models/auth/LoginDBStrategy"
import jwt from 'jsonwebtoken'
import RegisterStrategy from "../models/auth/SeedRegisterStrategy"
import { Admin } from "../db/models/AuthDBMode"
import dotenv from 'dotenv';
dotenv.config()

import {dbConfig} from '../db/dbConfig'

const { development: {jwt_key}} = dbConfig


export default class AuthService {

    private authAdmin
    private seedAdmin

    error: string
    code: number

    constructor(){
        this.authAdmin = new AuthContext(new LoginStrategy())
        // this.seedAdmin = new RegisterStrategy()
        this.seedAdmin = new AuthContext(new RegisterStrategy())
        this.error = '',
        this.code = 200
    }

    errorController(message: string, code: number) {
        this.error = message;
        this.code = code
    }

    async loginAdmin(userName: string, password: string){
        try {

            if(!userName || !password) throw this.errorController('fields are require', 404)

            const authStrategy = this.authAdmin
            
            const authLogin = await authStrategy.login(userName, password)

            if(!authLogin) throw this.errorController('Invalid credentials', 404)
            // Se puede crear un value secreto para usarlo

            const xtoken = jwt.sign({xtoken: userName}, jwt_key!, {expiresIn: '1h'})

            return {
                user: userName,
                xtoken 
            }

        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }

    async createSeedAdmin(userName: string, password: string){
        try {
            
            // this.authAdmin.setStrategy(this.seedAdmin)
            const authRegister = await this.seedAdmin.registerSeed(userName, password)

            if(!authRegister) throw this.errorController('invalid seed admin', 404)

            return {
                admin: userName
            }

        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }
}