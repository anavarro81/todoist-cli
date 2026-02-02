# todoist-cli
Aplicación minimalista de gestión de tareas por consola. Permite gestionar las tareas de una en una para evitar agobiarse. 


## Modelos
- New Task
    - Name
    - Description (opc)
    - Label (opc)
    - Proyect (opc)
    - dueDate (opc)
    - CreateAt (automatica)
    - priority



## Nueva Tarea

### newTaskMenu 
- Solicita los datos del usario
- Llama a `createNewTask` para crear la tarea

### createNewTask
- Obtiene la fecha del dia. Añade el campo: `createdAt`

  


## Ejecutar tareas

- `runTaskMenu` => Muestra el menú para recuperar las tareas. 
- `getTasksToRun` => Devuelve un array con las tareas a ejecuta segun el orden elegido. 

Menu de orden de tareas:

```
const runTaskQuestions = [
  {name: 'Random', value: 'random'},
  {name: 'Descending', value: 'desc'},
  {name: 'Ascending', value: 'asc'}
]
```





## Today
Show today tasks

