import { getDB } from "../bd.js";

export const newLabel = async (label) => {

    if (!label) {
        console.error('nombre de la etiqueta no informado')
        return
    }

    console.log('label recbido: ', label)

    try {
        const db = await getDB();
        const existLabel = await db.collection("label").find({label}).toArray()       
        
        if (!existLabel) {
            console.log('insertar label ')
            const labelInserted = await db.collection("label").insertOne({label})
            console.log('labelInserted ', labelInserted)        
            return labelInserted
        }                    
        
    } catch (error) {
        console.log('error al crear la etiqueta ', error)        
    }
}

export const getCategories = async () => {

    try {

    } catch {

    }

}