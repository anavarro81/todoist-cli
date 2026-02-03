import client from "../bd.js";
import { insertTask, getTasks } from "../repository/task.repository.js";

export const connectToDB = async () => {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const tasksCollection = db.collection("tasks");
    return tasksCollection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export const createNewTask = async (data) => {
  try {
    await insertTask(data);
  } catch (error) {
    console.error("error al insertar", error);
  }
};
// Obtener todas las tareas en el orden especificado
export const getTasksToRun = async (data) => {
  try {
    const tasksCollection = await connectToDB();

    switch (data.order) {
      case "random":
        const tasks = getTasks(data.order);
        return tasks;

      case "desc":
        console.log("Orden: Descendente");
        const tasksDesc = await tasksCollection
          .find()
          .sort({ createdAt: -1 })
          .toArray();
        return tasksDesc;
        break;
      case "asc":
        const taskAsc = await tasksCollection
          .find()
          .sort({ createdAt: 1 })
          .toArray();
        return taskAsc;
        break;
      default:
        console.log("Orden: Desconocido");
    }
  } catch (error) {
    console.log("error al obtener tareas", error);
    process.exit(1);
  }
};
