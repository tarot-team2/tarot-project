const API_URL = 'http://localhost:3000/readings'

export const getReadings = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

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

export const deleteReading = async (id) => {
    await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
})

}