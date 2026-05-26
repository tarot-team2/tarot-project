import axios from 'axios'

const BASE_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1'

const tarotApiService = {
  // Get all tarot cards
  getAllCards: () => {
    return axios.get(`${BASE_URL}/tarot`)
      .then(response => response.data)
  },

  // Get a single card by id
  getCardById: (id) => {
    return axios.get(`${BASE_URL}/tarot/${id}`)
      .then(response => response.data)
  },
}

export default tarotApiService