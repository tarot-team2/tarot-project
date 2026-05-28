import axios from 'axios'
const API_URL = 'http://localhost:3000/readings'

//Obtener la lectura
export const getReadings = async () => {
    const response = await axios.get(API_URL)
    return response.data
}
//Guardar la lectura
export const saveReading = async (reading) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reading),
    })
    return response.json()
    
}
//Eliminar la lectura
export const deleteReading = async (id) => {
    await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
})
}

//Actualizar la lectura
export const updateReading = async (id, updateData) => {
    const response = await axios.patch(
        `${API_URL}/${id}`,
        updateData
    )
    return response.data
}
