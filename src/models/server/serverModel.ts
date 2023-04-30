import express, {Application } from "express";
import routerShoe  from '../../routes/shoe.routes'
import routerBrand from '../../routes/brand.routes'
import routerAuth from '../../routes/auth.routes'
import cors from 'cors'

import { sequelize } from "../../db/dbConection";
import { Brand } from "../../db/models/BrandDBModel";
import { Shoe } from "../../db/models/ShoeDBModel";
// import cookieParser from 'cookie-parser'
// import bodyParser from "body-parser";

export default class Server {
    
    private app: Application
    private port: string
    private paths: {          
        shoe: '/api/shoe',
        brand: '/api/brand',
        auth: '/api/auth'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000'

        this.paths = {          
            shoe: '/api/shoe',
            brand: '/api/brand',
            auth: '/api/auth'
        }

        this.dbConnection()

        // Middlewares
        this.middlewares();

        // Definir rutas
        this.routes(); 
    }

    async dbConnection(){
        try {
            // await sequelize.authenticate();
            await sequelize.sync()
            // await Brand.sync()
            // await Shoe.sync()
            
            // await Brand.sync({force: true})
            // await Shoe.sync({force: true})
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    middlewares(){
        this.app.use( express.json() )
        // this.app.use( cookieParser() )
        this.app.use( cors())
        // this.app.use( bodyParser.json() );
        this.app.use( express.urlencoded({extended: true}) )
    }

    routes(){
        this.app.use(this.paths.shoe, routerShoe)
        this.app.use(this.paths.brand, routerBrand)
        this.app.use(this.paths.auth, routerAuth)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}