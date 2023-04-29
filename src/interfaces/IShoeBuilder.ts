import Shoe from "../models/shoes/Shoe"

export interface IShoeBuilder{
    name: string
    description: string
    price: number
    brand: string
    thumbnail: string

    setName(name:string): IShoeBuilder
    setDescripton(description: string): IShoeBuilder
    setPrice(price: number): IShoeBuilder
    setBrand(brand: string): IShoeBuilder
    setImage(img: string): IShoeBuilder

    build(): Shoe
}