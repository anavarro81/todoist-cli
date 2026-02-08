import * as tasksRepository from "../repository/task.repository.js";
import { runTaskMenu, runTaskOneByOneMenu, todayTaskMenu } from "../menus/menus.js";

export const createNewTask = async (data) => {
  try {
    await tasksRepository.insertTask(data);
  } catch (error) {
    console.error("error al insertar", error);
  }
};
// Obtener todas las tareas en el orden especificado
export const getTasksToRun = async (data) => {
  try {
    const tasks = await tasksRepository.getTasks(data.order);
    return tasks;
  } catch (error) {
    console.error("error al obtener tareas", error);
    process.exit(1);
  }
};

export const runTasks = async () => {
  // selecctionar orden de tareas
  const order = await runTaskMenu();

  const tasks = await getTasksToRun(order);  

  let opc = "";

  opc = await runTaskOneByOneMenu(tasks);

  let exit = "N";

  while (exit != "S")
    if (opc == "completedNext") {
      await deleteTask(tasks[0]._id);
      tasks.shift();
      if (tasks.length > 0) {
        opc = await runTaskOneByOneMenu(tasks);
      } else {
        console.log("No quedan tareas");
        exit = "S";
      }
    } else if (opc == "completedExit") {
      await deleteTask(tasks[0]._id);
      tasks.shift();
      exit = "S";
    } else {
      exit = "S";
    }
};


export const getTodayTask = async () => {
  try {
    const todayTask = await tasksRepository.getTodayTasks();   
    

    if (todayTask.length > 0) {

      let opc = await todayTaskMenu(todayTask);

      while (opc != "exit") {
        opc = await todayTaskMenu(todayTask);
      }

      return 
    } else {
      console.log("No tienes tareas para hoy");
      return
    }

      

  } catch (error) {
    console.log("error al obtener tareas de hoy ", error);
  }
}
