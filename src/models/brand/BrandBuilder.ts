import { IBrandBuilder } from "../../interfaces/IBrandBuilder";
import Brand from "./Brand";


export default class BrandBuilder implements IBrandBuilder{
    name: string;
    logo: string;

    constructor(){
        this.name = ''
        this.logo = ''
    }

    reset(){
        this.name = '',
        this.logo = ''
    }

    setName(name: string): IBrandBuilder {
        this.name = name
        return this
    }

    setLogo(logo: string): IBrandBuilder {
        this.logo = logo
        return this
    }

    build(): Brand {
        const brand = new Brand(
            this.name,
            this.logo
        )

        this.reset()
        
        return brand
    }
}