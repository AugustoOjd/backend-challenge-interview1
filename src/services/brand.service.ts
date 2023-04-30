import { Brand } from "../db/models/BrandDBModel"
import BrandBuilder from "../models/brand/BrandBuilder"
import BrandDirector from "../models/brand/BrandDirector"


export default class BrandService {

    private brandBuilder
    private brandDirector

    error: string
    code: number

    constructor(){
        this.brandBuilder = new BrandBuilder()
        this.brandDirector = new BrandDirector(this.brandBuilder)

        this.error = ''
        this.code = 200
    }

    errorController(message: string, code: number) {
        this.error = message;
        this.code = code
    }

    async createBrand(name: string, logo: string){
        try {
            
            if( !name || !logo) throw this.errorController('inputs require', 404)

            const brand = await Brand.create({
                name: name,
                logo: logo
            })
            
            return {
                data: brand
            }
        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }

}