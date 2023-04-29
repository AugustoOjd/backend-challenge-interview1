import BrandBuilder from "../models/brand/BrandBuilder"
import BrandDirector from "../models/brand/BrandDirector"


export default class BrandService {

    private brandBuilder
    private brandDirector

    constructor(){
        this.brandBuilder = new BrandBuilder()
        this.brandDirector = new BrandDirector(this.brandBuilder)
    }

    async generateBrands(){
        
    }

}