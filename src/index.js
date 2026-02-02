import { createNewTask, getTasksToRun } from "./tasks/tasks.js";
import { mainMenu, newTaskMenu, runTaskMenu } from "./menus/menus.js";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  let opc = 0;

  while (opc != 3) {
    let { opc } = await mainMenu();
    opc = parseInt(opc);

    let data = "";

    switch (opc) {
      case 1:
        data = await newTaskMenu();
        createNewTask(data);
        break;
      case 2:
        data = await runTaskMenu();
        const tasks = await getTasksToRun(data);
        console.log('taras obtenidas: ', tasks);
        break;
      case 3:
        process.exit(0);
      default:
        console.log("Opción inválida, por favor intente de nuevo.");
    }
  }
};

main();
