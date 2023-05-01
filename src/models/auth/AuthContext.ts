import { IAuthContext } from "../../interfaces/IAuth";

export default class AuthContext{

    private strategy: IAuthContext

    constructor(strategy: IAuthContext){
        this.strategy = strategy
    }

    setStrategy(strategy: IAuthContext){
        this.setStrategy(strategy)
    }

    login(userName: string, password: string): Promise<boolean>{
        return this.strategy.login!(userName, password)
    }

    registerSeed(userName: string, password: string): Promise<boolean>{
        return this.strategy.registerSeed!(userName, password)
    }

} 