import './SelectedFaceDownCard.scss'

// Props expected from parent (DeckFaceDownCard):
// position -  'past' | 'present' | 'future'
// cardId - number | null (null if no card is selected)
// onDeselect - function

const POSITION_LABELS = {
    past: 'Pasado',
    present: 'Presente',
    future: 'Futuro',
}

const SelectedFaceDownCard = ({ position, cardId, onDeselect }) => {
  return (
    <div className={`selected-face-down-card selected-face-down-card--${position} ${cardId ? 'selected-face-down-card--selected' : ''}`}>
      <div className="selected-face-down-card__back">
        {cardId && (
          <button
            className="selected-face-down-card__badge"
            onClick={onDeselect}
            aria-label={`Deseleccionar carta del ${POSITION_LABELS[position]}`}
          >
            {POSITION_LABELS[position]}
          </button>
        )}
      </div>
    </div>
  )
}

export default SelectedFaceDownCard
