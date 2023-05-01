

export default class Shoe {

    private name: string
    private description: string
    private price: number
    private brandId: number
    private thumbnail: string

    constructor(name: string, description: string, price: number, brandId: number, thumbnail: string){
        this.name = name
        this.description = description
        this.price = price
        this.brandId = brandId
        this.thumbnail = thumbnail
    }

}