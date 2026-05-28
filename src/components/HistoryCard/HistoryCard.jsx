import '../HistoryCard/HistoryCard.scss'
import DeleteEditButton from '../DeleteEditButton/DeleteEditButton'
import HistoryCardMeta from '../HistoryCardMeta/HistoryCardMeta'

// Props expected from parent:
// reading — object { id, consultantName, date, past, present, future }
// onEdit   — function(reading)
// onDelete — function(id)
const HistoryCard = ({ reading, onEdit, onDelete }) => {
  const { consultantName, date, past, present, future } = reading
 
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
          pastCard={past}
          presentCard={present}
          futureCard={future}
        />
      </div>
    </section>
  )
}
 
export default HistoryCard