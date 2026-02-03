import { connectToDB } from "../tasks/tasks.js";
import { taskData } from "../data/taskData.js";

export const loadTasks = async () => {
  try {
    const tasksCollection = await connectToDB();

    await tasksCollection.deleteMany({});
    console.log("Se han borrado las tareas");
    await tasksCollection.insertMany(taskData);
    console.log("Tareas cargadas correctamente");
    process.exit(1)
  } catch (error) {
    console.log("Error al cargar las tareas", error);
  }
};

loadTasks();
