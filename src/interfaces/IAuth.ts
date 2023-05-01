

export interface IAuthContext {

    login?(userName: string, password: string): Promise<boolean>

    registerSeed?(userName: string, password: string): Promise<boolean>
}