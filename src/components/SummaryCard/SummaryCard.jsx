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

      <div className="summary-card__top">
        <div className="summary-card__image-line"></div>
        <img className="summary-card__image"
        src={card.arcaneImage.imageSrc}
        alt={card.arcaneName}
      />
        
        <div className="summary-card__info">
          <h2 className="summary-card__position">{POSITION_LABELS[position]}</h2>
          <h3 className="summary-card__name">{card.arcadeName}</h3>
          <p className="summary-card__meaning">{card.arcaneDescription}</p>
        </div>
      </div>

      <div className="summary-card__goddess-info">
        <div className="summary-card__goddess-wrapper">
          <div className="summary-card__goddess-circle"></div>
          <p className="summary-card__goddess">{card.goddessName}</p>
        </div>
      </div>

    </article>
  )
}

export default SummaryCard