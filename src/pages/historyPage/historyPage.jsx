import { useState, useEffect } from 'react'
import './HistoryPage.scss'
import HistoryCard from '../../components/HistoryCard/HistoryCard'
import DeleteAllButton from '../../components/DeleteAllButton/DeleteAllButton'

import { getReadings } from '../../service/readingsAPI'
import { useLoaderData } from 'react-router'

const HistoryPage = () => {
  const [readings, setReadings] = useState([])

  useEffect(() => {
    loadReadings()
}, [])

const loadReadings = async () => {
  try {
    const data = await getReadings()

    setReadings(data)

  } catch (error) {
    console.error('Error al cargar las lecturas:', error)
  }
}

const handleEdit = (reading) => {
  console.log('editar', reading)
}

const handleDelete = (id) => {
  console.log('borrar', id)
}

const handleDeleteAll = () => {
  setReadings([])
}

  return (
    <div className="history-page">
      <div className="history-page__header">
        <h1 className="history-page__title">Historial</h1>
        <DeleteAllButton onClick={handleDeleteAll} />
      </div>

      <section className="history-page__list">
        {readings.length === 0 ? (
          <p className="history-page__empty">
            No hay lecturas guardadas todavía.
          </p>
        ) : (
          readings.map(reading => (
            <HistoryCard
              key={reading.id}
              reading={reading}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </section>
    </div>
  )
}

export default HistoryPage;