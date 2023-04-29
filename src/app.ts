import Server from "./models/server/serverModel";
import dotenv from 'dotenv'
dotenv.config()

export const server = new Server()


server.listen()