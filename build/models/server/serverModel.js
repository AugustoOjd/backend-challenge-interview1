"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import express from 'express'
const cors_1 = __importDefault(require("cors"));
// import cookieParser from 'cookie-parser'
// import bodyParser from "body-parser";
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.paths = {
            user: '/api/user',
            book: '/api/books'
        };
        // Middlewares
        this.middlewares();
        // Definir rutas
        this.routes();
    }
    getApp() {
        return this.app;
    }
    // EXPORTAR THIS.APP O APP DEL SERVER PARA USAR EN TEST
    middlewares() {
        this.app.use(express_1.default.json());
        // this.app.use( cookieParser() )
        this.app.use((0, cors_1.default)());
        // this.app.use( bodyParser.json() );
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}
exports.default = Server;
