import client from "../bd.js";

const connectToDB = async () => {

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);    
    const tasksCollection = db.collection('tasks');    
    return tasksCollection;    
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);    
  }

}


export const createNewTask = async (data) => {
  try {
    const tasksCollection = await connectToDB();
    const currentDate = new Date();
    const result = await tasksCollection.insertOne({ ...data, createdAt: currentDate });    
  } catch (error) {
    console.log('error al insertar', error)
  }
}
// Obtener todas las tareas en el orden especificado
export const getTasksToRun = async (data) => {
  
  try {

    const tasksCollection = await connectToDB();
    const tasks = await tasksCollection.find().toArray()
    return tasks;
    
    
    
  } catch (error) {
    console.log('error al obtener tareas', error)
    process.exit(1);
  }
}

  // {name: 'Random', value: 'random'},
  // {name: 'Descending', value: 'desc'},
  // {name: 'Ascending', value: 'asc'}


