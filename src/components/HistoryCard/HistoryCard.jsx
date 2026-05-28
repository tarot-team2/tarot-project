import '../HistoryCard/HistoryCard.scss'
import DeleteEditButton from '../DeleteEditButton/DeleteEditButton'
import HistoryCardMeta from '../HistoryCardMeta/HistoryCardMeta'
import { useState } from 'react'
import DetailCard from '../DetailCard/DetailCard'
// Props expected from parent:
// reading — object { id, consultantName, date, past, present, future }
// onEdit   — function(reading)
// onDelete — function(id)
const HistoryCard = ({ reading, onEdit, onDelete }) => {
const { consultantName, date, pastCard, presentCard, futureCard} = reading

const [selectedCard, setSelectedCard] = useState(null)
const [isModalOpen, setIsModalOpen] = useState(false)

const handleOpenModal = (card) => {
  setIsModalOpen(true)
  setSelectedCard(card)
}

const handleCloseModal = () => {
  setIsModalOpen(false)
  setSelectedCard(null)
}
  return (
    <section className='history-card'>
      <div className='history-card__information'>
        <h2 className='history-card__user-name'>{consultantName}</h2>
        <p className='history-card__date'>{date}</p>
      </div>

      <div className='history-card__buttons'>
        <DeleteEditButton variant='edit' onClick={() => onEdit(reading)} />
        <DeleteEditButton variant='delete' onClick={() => onDelete(reading.id)} />
      </div>

      <div className='history-card__cards'>
        <HistoryCardMeta
          pastCard={pastCard}
          presentCard={presentCard}
          futureCard={futureCard}
          onCardClick={handleOpenModal}
        />
      </div>
      {isModalOpen && (
        <DetailCard
          cards={{
            past: pastCard,
            present: presentCard,
            future: futureCard,
          }}
          initialCard={selectedCard}
          onClose={handleCloseModal}
        />
      )}  
          
    </section>
  )
}

export default HistoryCard