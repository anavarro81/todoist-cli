import client from "../bd.js";

export const connectToDB = async () => {

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

  console.log('data recibida en getTasksToRun:', data.order);

  
  try {

    const tasksCollection = await connectToDB();
    

      switch (data.order) {
    case 'random':      
      const task = await tasksCollection.aggregate([{ $sample: { size: 5 } }]).toArray();
      console.log('tareas recuperadas: ', task);  
      return task
      
    case 'desc':
      console.log('Orden: Descendente');
      const tasksDesc = await tasksCollection.find().sort({ createdAt: -1 }).toArray();
      return tasksDesc
      break;
    case 'asc':
      const taskAsc = await tasksCollection.find().sort({ createdAt: 1 }).toArray();
      return taskAsc  
      break;
    default:
      console.log('Orden: Desconocido');
  }

    
    
    
  } catch (error) {
    console.log('error al obtener tareas', error)
    process.exit(1);
  }
}

  // {name: 'Random', value: 'random'},
  // {name: 'Descending', value: 'desc'},
  // {name: 'Ascending', value: 'asc'}


