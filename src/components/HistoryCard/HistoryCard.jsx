import '../HistoryCard/HistoryCard.scss'
import DeleteEditButton from '../DeleteEditButton/DeleteEditButton'

function HistoryCard() {
    const historyCard = {
        userName: "Maria Garcia",
        date: "18 de Mayo de 2024",
    }
  return (
    <section className='history-card'>
        <div className='history-card__buttons'>
            <DeleteEditButton variant='edit' />
            <DeleteEditButton variant='delete' />
        </div>

        <h2 className='history-card__user-name'>{historyCard.userName}</h2>
        <p className='history-card__date'>{historyCard.date}</p>
    </section>
  )
}

export default HistoryCard