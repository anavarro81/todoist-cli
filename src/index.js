import { createNewTask, getTasksToRun } from "./services/task.service.js";
import {
  mainMenu,
  newTaskMenu,
  runTaskMenu,
  runTaskOneByOneMenu,
} from "./menus/menus.js";
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

        let exit = "N";

        while (exit == "N") {
          exit = await runTaskOneByOneMenu(tasks);
        }

        break;
      case 3:
        process.exit(0);
      default:
        console.log("Opción inválida, por favor intente de nuevo.");
    }
  }
};

main();
