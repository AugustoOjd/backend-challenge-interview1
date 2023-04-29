import { IBrandBuilder } from "../../interfaces/IBrandBuilder"


export default class BrandDirector {
    private brandBuilder: IBrandBuilder

    constructor(brandBuilder: IBrandBuilder){
        this.brandBuilder = brandBuilder
    }
    
    
    setBrandBuilder(brandBuilder: IBrandBuilder){
        this.brandBuilder = brandBuilder
    }

    createBrand(name: string, logo: string){
        this.brandBuilder   .setName(name)
                            .setLogo(logo)
    }
}