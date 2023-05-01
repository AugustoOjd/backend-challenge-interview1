import { IShoeBuilder } from "../../interfaces/IShoeBuilder";
import Shoe from "./Shoe";

export default class ShoeBuilder implements IShoeBuilder{
    name: string
    description: string
    price: number
    brandId: number
    thumbnail: string

    constructor(){
        this.name = '',
        this.description = '',
        this.price = 0
        this.brandId = 0
        this.thumbnail = ''
    }

    reset(){
        this.name = '',
        this.description = '',
        this.price = 0
        this.brandId = 0
        this.thumbnail = ''
    }

    setName(name: string): IShoeBuilder {
        this.name = name
        return this
    }

    setDescripton(description: string): IShoeBuilder {
        this.description = description
        return this
    }

    setPrice(price: number): IShoeBuilder {
        this.price = price
        return this
    }

    setBrand(brandId: number): IShoeBuilder {
        this.brandId = brandId
        return this
    }

    setImage(img: string): IShoeBuilder {
        this.thumbnail = img
        return this
    }

    build(): Shoe {
        const regularShoe = new Shoe(
            this.name,
            this.description,
            this.price,
            this.brandId,
            this.thumbnail,
        )

        this.reset()

        return regularShoe
    }
}