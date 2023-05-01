import { IShoeBuilder } from "../../interfaces/IShoeBuilder"


export default class ShoeDirector {
    private shoeBuilder: IShoeBuilder

    constructor(shoeBuilder: IShoeBuilder){
        this.shoeBuilder = shoeBuilder
    }
    
    
    setShoeBuilder(shoeBuilder: IShoeBuilder){
        this.shoeBuilder = shoeBuilder
    }

    createShoe(
        name: string,
        description: string,
        price: number,
        brandId: number,
        thumbnail: string,
    ){
        this.shoeBuilder.setName(name)
                        .setDescripton(description)
                        .setPrice(price)
                        .setBrand(brandId)
                        .setImage(thumbnail)
    }
}

