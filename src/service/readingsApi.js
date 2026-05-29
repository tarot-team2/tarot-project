import axios from 'axios'
const API_URL = 'http://localhost:3000/readings'

//Obtener la lectura
export const getReadings = async () => {
    const response = await axios.get(API_URL)
    return response.data.reverse()
}
//Guardar la lectura
export const saveReading = async (reading) => {
    const response = await axios.post(API_URL, reading)
    return response.data
}

//Eliminar la lectura
export const deleteReading = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
}

//Actualizar la lectura
export const updateReading = async (id, updateData) => {
    const response = await axios.patch(`${API_URL}/${id}`, updateData)
    return response.data
}