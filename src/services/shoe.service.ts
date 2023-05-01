import { Brand } from '../db/models/BrandDBModel';
import { Shoe } from '../db/models/ShoeDBModel';
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


    async getShoes(limit?: number){
        try {
            
            if(!limit){
                const shoes = await Shoe.findAll()
                if(!shoes) throw this.errorController('shoes not found', 500)
                return {
                    data: shoes
                }
            }

            const shoes = await Shoe.findAll()
            const limitedShoe = shoes.slice(0, limit)

            return {
                data: limitedShoe
            }

        } catch (error) {
            throw {
                msg: this.error,
                code: this.code
            }
        }
    }

    async getShoeById(id: number){
        try {
            if(!id) throw this.errorController('id is require', 404)

            const shoe = await Shoe.findByPk(id)
            if(!shoe) throw this.errorController('shoe not found', 404)

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

    async createShoe(name: string,description: string,price: number, thumbnail: string,){
        try {
            if(!name || !description || !price || !thumbnail) throw this.errorController('All fields are require', 404)

            const randomBrand =  Math.floor(Math.random() * (3 - 1 + 1) + 1)

            this.shoeDirector.createShoe(name, description, price, randomBrand, thumbnail)
            const shoe = this.shoeBuilder.build()

            const createInDB = await Shoe.create({...shoe})

            if(!createInDB) throw this.errorController('Error save in DB', 500)

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

    async updateById(id: number, newAtributes: any){
        try {
            if(!id) throw this.errorController('id is require', 404)

            const shoe = await Shoe.findOne({
                where: {
                    id: id
                }
            })
            if(!shoe) throw this.errorController('shoe not found', 404)

            shoe.set(newAtributes)
            shoe.save()

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

    async deleteById(id: number){
        // delete puede cambiar el estado de un producto a false, sin eliminarlo
        // pero voy aplicar el delete literal como pide el challenge
        try {
            if(!id) throw this.errorController('id is require', 404)

            const shoe = await Shoe.destroy({
                where: {
                    id: id
                }
            })
            if(!shoe) throw this.errorController('shoe not found', 404)

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


}