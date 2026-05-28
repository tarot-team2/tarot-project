import './HistoryCardMeta.scss'

// Props expected from parent:
// pastCard    — object { arcaneImage: { imageSrc, author }, arcaneName }
// presentCard — object { arcaneImage: { imageSrc, author }, arcaneName }
// futureCard  — object { arcaneImage: { imageSrc, author }, arcaneName }

const POSITIONS = [
  { key: 'pastCard',     label: 'Pasado',   icon: '☽', modifier: 'past' },
  { key: 'presentCard',  label: 'Presente', icon: '☀', modifier: 'present' },
  { key: 'futureCard',   label: 'Futuro',   icon: '★', modifier: 'future' },
]

const HistoryCardMeta = ({ pastCard, presentCard, futureCard }) => {
  const cards = { pastCard, presentCard, futureCard }

  return (
    <div className="history-card-meta">
      {POSITIONS.map(({ key, label, icon, modifier }) => (
        <div
          key={key}
          className={`history-card-meta__item history-card-meta__item--${modifier}`}
        >
          <span className="history-card-meta__label">
            {icon} {label}
          </span>
          <div className="history-card-meta__card">
            <img
              className="history-card-meta__image"
              src={cards[key].arcaneImage.imageSrc}
              alt={cards[key].arcaneName}
            />
          </div>
          <p className="history-card-meta__name">{cards[key].arcaneName}</p>
        </div>
      ))} 
    </div>
  )
}

export default HistoryCardMeta