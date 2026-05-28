import { useState } from 'react'
import './HistoryPage.scss'
import HistoryCard from '../../components/HistoryCard/HistoryCard'
import DeleteAllButton from '../../components/DeleteAllButton/DeleteAllButton'

// ── Datos de prueba — mañana los reemplazamos por la API ──
const MOCK_READINGS = [
  {
    id: '1',
    consultantName: 'María García',
    date: '18 de mayo de 2026',
    past: {
      arcaneName: 'La Emperatriz',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
    present: {
      arcaneName: 'La Justicia',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
    future: {
      arcaneName: 'La Estrella',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
  },
  {
    id: '2',
    consultantName: 'Ana Martínez',
    date: '15 de mayo de 2026',
    past: {
      arcaneName: 'El Mago',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
    present: {
      arcaneName: 'La Torre',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
    future: {
      arcaneName: 'El Mundo',
      arcaneImage: { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
    },
  },
]

const HistoryPage = () => {
  // TODO mañana: reemplazar useState(MOCK_READINGS) por fetch a la API
  const [readings, setReadings] = useState(MOCK_READINGS)

  console.log('HistoryPage se renderiza, readings:', readings)

  const handleEdit = (reading) => {
    // TODO mañana: implementar edición
    console.log('editar', reading)
  }

  const handleDelete = (id) => {
    // TODO mañana: llamar a la API para borrar
    setReadings(readings.filter(r => r.id !== id))
  }

  const handleDeleteAll = () => {
    // TODO mañana: llamar a la API para borrar todo
    setReadings([])
  }

  console.log('readings:', readings)
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