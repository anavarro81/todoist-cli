import { getDB } from "../bd.js";

export const deleteTask = async (id) => {
  console.log("borrar tarea con id ", id);

  try {
    const db = await getDB();
    db.collection("tasks").deleteOne({ _id: id });
  } catch (error) { }
};

export const insertTask = async (data) => {
  try {
    const currentDate = new Date();
    const db = await getDB();
    db.collection("tasks").insertOne({ ...data, createdAt: currentDate });
  } catch (error) {
    console.log("error al insertar la tarea ", error);
  }
};

export const getTasks = async (order) => {
  const db = await getDB();
  const tasksCollection = db.collection("tasks");
  let task = "";
  switch (order) {
    case "random":
      task = await tasksCollection
        .aggregate([{ $sample: { size: 10 } }])
        .toArray();
      return task;
    case "desc":
      task = await tasksCollection.find({ dueDate: { $exists: true } }).sort({ dueDate: -1 }).toArray();
      console.log("tareas descendente ", task);
      return task;
    case "asc":
      task = await tasksCollection.find({ dueDate: { $exists: true } }).sort({ dueDate: 1 }).toArray();
      console.log("tareas ascendente ", task);
      return task;
    default:
      console.log("orden no valido ");
  }
};

export const getTodayTasks = async () => {

  try {

    const db = await getDB();
    const tasksCollection = db.collection("tasks");

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const todayTask = await tasksCollection.find({ dueDate: { $gte: today, $lte: endOfDay } }).toArray();
    return todayTask

  } catch (error) {

    console.log("error al obtener tareas de hoy ", error);
  }



}

