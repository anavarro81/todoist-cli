import inquirer from "inquirer";

const mainMenuChoices = [
  { name: "Alta de tarea", value: 1 },
  { name: "Ejecutar tareas", value: 2 },
  { name: "Tareas de hoy", value: 3 },
  { name: "Salir", value: 4 },
];

const runTaskQuestions = [
  { name: "Random", value: "random" },
  { name: "Descending", value: "desc" },
  { name: "Ascending", value: "asc" },
];

export const createTaskQuesitons = [
  {
    type: "input",
    name: "taskName",
    message: "Ingrese nombre de tarea",
    validate: (taskName) =>
      taskName.trim() ? true : "Nombre de tarea obligatorio",
  },

  {
    type: "input",
    name: "description",
    message: "Ingrese descripcion de tarea",
  },
  {
    type: "input",
    name: "dueDate",
    message: "Ingrese fecha de vencimiento de tarea",
  },
  {
    type: "rawlist",
    name: "priority",
    message: "Introduce el prioridad de la tarea (alta, media, baja):",
    choices: [
      { name: "Alta", value: "alta" },
      { name: "Media", value: "media" },
      { name: "Baja", value: "baja" },
    ],
  },
  
  {
    type: 'list',
    name: 'confirmLabel',
    message: '¿Quieres agregar una etiqueta a la tarea?',
    choices: [
      { name: 'Sí', value: true },
      { name: 'No', value: false },
    ],
    default: 1,
  },

  {
    type: "rawlist",
    name: "label",
    message: "Selecciona una etiqueta: ",
    choices: [
      {name: "5 minutos", value: "5_minutos"},
      {name: "calle", value: "calle"},
      {name: "mañana", value: "manana"},
    ]
  },

  {
    type: "input",
    name: "project",
    message: "Ingrese el proyecto asociado a la tarea:",
  },
];

export const mainMenu = async () => {
  const data = await inquirer.prompt([
    {
      type: "rawlist",
      name: "opc",
      message: "Select an option:",
      choices: mainMenuChoices,
    },
  ]);

  return data;
};

export const runTaskMenu = async () => {
  const data = inquirer.prompt({
    type: "rawlist",
    name: "order",
    message: "¿En qué orden quieres mostrar las taras",
    choices: runTaskQuestions,
  });

  return data;
};

export const newTaskMenu = async () => {
  // Obtener datos de nueva tarea
  const data = await inquirer.prompt(createTaskQuesitons);
  return data;
};

export const runTaskOneByOneMenu = async (tasks) => {
  const data = await inquirer.prompt([
    {
      type: "rawlist",
      name: "opc",
      message: `¿Has completado la tarea: ${tasks[0].taskName}`,
      choices: [
        {
          name: `Sí, la he completado. Quiero otra`,
          value: "completedNext",
        },
        {
          name: "Sí, la he completado. Quiero salir`,",
          value: "completedExit",
        },
        {
          name: "Salir`,",
          value: "exit",
        },
      ],
    },
  ]);

  return data.opc;
};

export const todayTaskMenu = async (todayTask) => {
  console.log("Tareas de hoy: ");

  const opcSalir = [{ name: "Salir", value: "exit" }];

  console.table(todayTask, ["name", "description"]);

  // '\b\b' `Tarea #${i + 1}:`, todayTask[i].name + '\n' + "Descripcion: " + todayTask[i].description

  const data = await inquirer.prompt([
    {
      type: "rawlist",
      name: "opc",
      message: "Selecciona salir para volver al menu principal",
      choices: opcSalir,
    },
  ]);

  console.log("opcion seleccionada ", data.opc);

  return data.opc;
};

// export const showTaskByCategory = async () => {
//   try {

//     const categories = await

//     const opc = inquirer.prompt({
//       type: "rawlist",
//       name: "category",
//       message: "Selecciona de que categoria quieres ver las opciones"
//       choices:
//     })

//   } catch (error) {

//   }
// }
