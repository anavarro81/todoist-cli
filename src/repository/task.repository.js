import { getDB } from "../bd.js";

export const deleteTask = async (id) => {
  console.log("borrar tarea con id ", id);

  try {
    const db = await getDB();
    db.collection("tasks").deleteOne({ _id: id });
  } catch (error) {}
};

export const insertTask = async (data) => {
  try {
    const currentDate = new Date();
    const db = await getDB();
    db.collection("tasks").insertOne({ ...data, createdAt: currentDate });
  } catch (error) {
    console.error("error al insertar la tarea ", error);
  }
};

export const getTasks = async (order) => {
  const db = await getDB();
  const tasksCollection = db.collection("tasks");
  let task = "";
  switch (order) {
    case "random":
      task = await tasksCollection
        .aggregate([{ $sample: { size: 5 } }])
        .toArray();
      return task;
    case "desc":
      task = await tasksCollection.find({ dueDate: { $exists: true}}).sort({ dueDate: -1 }).toArray();
      
      return task;
    case "asc":
      task = await tasksCollection.find({ dueDate: { $exists: true}}).sort({ dueDate: 1 }).toArray();
      
      return task;
    default:
      console.error("orden no valido ");
  }
};
