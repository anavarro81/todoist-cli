import inquirer from "inquirer";

const mainMenuChoices = [
  { name: "Alta de tarea", value: 1 },
  { name: "Ejecutar tareas", value: 2 },
  { name: "Salir", value: 3 },
];

const runTaskQuestions = [
  {name: 'Random', value: 'random'},
  {name: 'Descending', value: 'desc'},
  {name: 'Ascending', value: 'asc'}
]

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
    type: "input",
    name: "label",
    message: "Etiqueta para la tarea (opcional):",
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

export const runTaskMenu = async() => {

  const data = inquirer.prompt({
    type: 'rawlist',
    name: 'order',
    message: "¿En qué orden quieres mostrar las taras", 
    choices: runTaskQuestions
  })

  return data

}

export const newTaskMenu = async () => {
  // Obtener datos de nueva tarea
  const data = await inquirer.prompt(createTaskQuesitons);
  return data;
};


export const runTaskOneByOneMenu = async(tasks) => {

  console.log('tareas en runTaskOneByOneMenu: ', tasks);

  const data = await inquirer.prompt([
    {
      type: "confirm",
      name: "completed",
      message: `¿Has completado la tarea: ${tasks[0].taskName}?`,
      default: true,
    },

    {
      type: "confirm",
      name: "exit",
      message: `Salir`,
      default: true,

    }
  ])

  return data;

}