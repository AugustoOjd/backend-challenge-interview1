import ShoeBuilder from '../models/shoes/ShoeBuilder';
import ShoeDirector from '../models/shoes/ShoeDirector';


export default class ShoeService {

    private shoeBuilder
    private shoeDirector

    error: string
    code: number

    constructor(){
        this.shoeBuilder = new ShoeBuilder()
        this.shoeDirector = new ShoeDirector(this.shoeBuilder)
        this.error = ''
        this.code = 200
    }

    errorController(message: string, code: number) {
        this.error = message;
        this.code = code
    }


    async getShoes(limit?: string){}

    async getShoeById(id: string){}

    async createShoe(name: string,description: string,price: number,thumbnail: string){
        try {
            if(!name || !description || !price || !thumbnail) throw this.errorController('All fields are require', 404)

            this.shoeDirector.createShoe(name, description, price, 'brand id in tabla', 'link img')
            const shoe = this.shoeBuilder.build()

            return {
                data: shoe
            }
        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }

    async updateById(id: string){}

    async deleteById(id: string){
        // delete puede cambiar el estado de un producto a false, sin eliminarlo
        // pero voy aplicar el delete literal como pide el challenge


    }


}