import express, {Application } from "express";
// import express from 'express'
import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import bodyParser from "body-parser";

export default class Server {
    
    private app: Application
    private port: string
    private paths: {          
        user: '/api/user',
        book: '/api/books'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000'

        this.paths = {          
            user: '/api/user',
            book: '/api/books'
        }

        // Middlewares
        this.middlewares();

        // Definir rutas
        this.routes(); 
    }

    getApp(){
        return this.app
    }

    // EXPORTAR THIS.APP O APP DEL SERVER PARA USAR EN TEST


    middlewares(){
        this.app.use( express.json() )
        // this.app.use( cookieParser() )
        this.app.use( cors())
        // this.app.use( bodyParser.json() );
        this.app.use( express.urlencoded({extended: true}) )
    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}