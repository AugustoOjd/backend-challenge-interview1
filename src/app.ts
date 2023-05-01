import Server from "./models/server/serverModel";
import dotenv from 'dotenv'
dotenv.config()


const server = new Server()

server.listen()