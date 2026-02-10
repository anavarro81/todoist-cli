import * as labelResopitory from "../repository/label.respository";

export const showTaskbyLabel = async () => {
  try {
    
    const labels = await labelResopitory.getLabels()

    if(labels.length === 0) {
        console.log('No existen etiquetas')
        return
    }

    
  
} catch (error) {}
};
