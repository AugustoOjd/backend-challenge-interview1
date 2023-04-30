import { IAuthContext } from "../../interfaces/IAuth";

export default class AuthContext{

    private strategy: IAuthContext

    constructor(strategy: IAuthContext){
        this.strategy = strategy
    }

    setStrategy(strategy: IAuthContext){
        this.setStrategy(strategy)
    }

    login(userName: string, password: string): boolean{
        return this.strategy.login(userName, password)
    }

} 