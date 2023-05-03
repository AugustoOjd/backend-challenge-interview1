"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shoe_routes_1 = __importDefault(require("../../routes/shoe.routes"));
const brand_routes_1 = __importDefault(require("../../routes/brand.routes"));
const auth_routes_1 = __importDefault(require("../../routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const dbConection_1 = require("../../db/dbConection");
const BrandDBModel_1 = require("../../db/models/BrandDBModel");
const ShoeDBModel_1 = require("../../db/models/ShoeDBModel");
const AuthDBMode_1 = require("../../db/models/AuthDBMode");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.paths = {
            shoe: '/api/shoe',
            brand: '/api/brand',
            auth: '/api/auth'
        };
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // Definir rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await sequelize.authenticate();
                yield dbConection_1.sequelize.sync();
                yield AuthDBMode_1.Admin.sync();
                yield BrandDBModel_1.Brand.sync();
                yield ShoeDBModel_1.Shoe.sync();
                // await Admin.sync({force: true})
                // await Brand.sync({force: true})
                // await Shoe.sync({force: true})
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:3000',
            methods: 'GET, PUT, PATCH, POST, DELETE',
            credentials: true
        }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(this.paths.shoe, shoe_routes_1.default);
        this.app.use(this.paths.brand, brand_routes_1.default);
        this.app.use(this.paths.auth, auth_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}
exports.default = Server;
