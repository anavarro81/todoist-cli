import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

console.log('BD_URI:', process.env.BD_URI);


const client = new MongoClient(process.env.BD_URI);

export default client

export const conectBD = async () => {
    const bd = await client.connect()
    console.log('Conectado a la base de datos: ', bd.databaseName);
}

export const disconnectBD = async () => {
    await client.close()
    console.log('Desconectado de la base de datos');
}