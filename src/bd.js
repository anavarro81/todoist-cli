import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db = null;

const BD_URI =
  process.env.NODE_ENV == "development"
    ? process.env.BD_URI_DEV
    : process.env.BD_URI_PROD;



const client = new MongoClient(BD_URI);

export default client;

export const conectBD = async () => {
  //Establece conexión de RED con el servidor MongoDB
  return await client.connect();
};

export const getDB = async () => {
  const client = await conectBD();
  const db = client.db("todoist");
  return db;
};

export const disconnectBD = async () => {
  await client.close();
  console.log("Desconectado de la base de datos");
};
