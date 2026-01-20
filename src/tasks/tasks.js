import client from "../bd.js";

export const createNewTask = async (data) => {
  try {
    
    client.connect();
    const db = client.db(process.env.DB_NAME);
    const tasksCollection = db.collection('tasks');
    const result = await tasksCollection.insertOne(data);
    console.log(`Nueva tarea creada con el ID: ${result.insertedId}`);
  } catch (error) {
    console.log('error ', error)
  }
}
