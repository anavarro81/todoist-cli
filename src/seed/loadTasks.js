
import {connectToDB} from '../tasks/tasks.js';
import {taskData} from "../data/taskData.js";

export const loadTasks = async () => {    

    try {
            const tasksCollection = await connectToDB();
            tasksCollection.insertMany(taskData);
            console.log('Tareas cargadas correctamente');
        
    } catch (error) {
        console.log('Error al cargar las tareas', error);        
    }  

}

loadTasks();


