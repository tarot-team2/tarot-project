import './SummaryCard.scss'

const POSITION_LABELS = {
  past:    'Pasado',
  present: 'Presente',
  future:  'Futuro',
}

const SummaryCard = ({ position, card }) => {
  if (!card) return null

  return (
    <article className={`summary-card summary-card--${position}`}>
      <h2 className="summary-card__position">{POSITION_LABELS[position]}</h2>
      <img
        className="summary-card__image"
        src={card.image}
        alt={card.name}
      />
      <div className="summary-card__info">
        <h3 className="summary-card__name">{card.name}</h3>
        <p className="summary-card__meaning">{card.meaning}</p>
      </div>
    </article>
  )
}

export default SummaryCard