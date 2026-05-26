import './FaceDownCard.scss'

// Props expected from parent (MazoPage):
// card       — object { id, arcaneNumber, arcaneName, ... }
// onSelect   — function to select this card
// isDisabled — boolean (true when 3 cards already selected)
// position   — 'past' | 'present' | 'future' | undefined

const POSITION_LABELS = {
  past: 'PASADO',
  present: 'PRESENTE',
  future: 'FUTURO',
}

const FaceDownCard = ({ card, onSelect, isDisabled, position }) => {
  return (
    <div
      className={`face-down-card ${isDisabled ? 'face-down-card--disabled' : ''} ${position ? `face-down-card--${position}` : ''}`}
      onClick={!isDisabled ? () => onSelect(card.id) : undefined}
      role="button"
      aria-label={`Seleccionar carta ${card.arcaneNumber}`}
      aria-disabled={isDisabled}
    >
      <div className="face-down-card__back">
        {position && (
          <div className="face-down-card__badge">
            {POSITION_LABELS[position]}
          </div>
        )}
      </div>
    </div>
  )
}

export default FaceDownCard