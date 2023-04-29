

export default class Shoe {

    private name: string
    private description: string
    private price: number
    private brand: string
    private thumbnail: string

    constructor(name: string, description: string, price: number, brand: string, thumbnail: string){
        this.name = name
        this.description = description
        this.price = price
        this.brand = brand
        this.thumbnail = thumbnail
    }

}