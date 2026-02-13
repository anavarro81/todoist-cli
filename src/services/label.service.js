import * as labelResopitory from "../repository/label.respository.js";

export const showTaskbyLabel = async () => {
  try {
    const labels = await labelResopitory.getLabels();

    if (labels.length === 0) {
      console.log("No existen etiquetas");
      return;
    }

    return labels;
  } catch (error) {
    console.log("error al recuperar las labels ", labels);
  }
};
