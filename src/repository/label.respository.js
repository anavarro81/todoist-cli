export const newLabel = async (category) => {

    if (!category) {
        console.error('nombre de la etiqueta no informado')
        return
    }

    try {
        const db = await getDB();
        const labelInserted = await db.collection("label").insertOne(label)        
        return labelInserted
        
    } catch (error) {
        console.log('error al crear la categoria ', error)        
    }
}

export const getCategories = async () => {

    try {

    } catch {

    }

}