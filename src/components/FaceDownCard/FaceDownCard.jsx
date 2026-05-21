import './FaceDownCard.scss'

// Props expected from parent:
// card       — object { id, arcaneNumber, arcaneName, ... }
// onSelect   — function to select this card
// isDisabled — boolean (true when 3 cards already selected)

const FaceDownCard = ({ card, onSelect, isDisabled }) => {
  return (
    <div
      className={`face-down-card ${isDisabled ? 'face-down-card--disabled' : ''}`}
      onClick={!isDisabled ? () => onSelect(card.id) : undefined}
      role="button"
      aria-label={`Seleccionar carta ${card.arcaneNumber}`}
      aria-disabled={isDisabled}
    >
      <div className="face-down-card__back" />
    </div>
  )
}

export default FaceDownCard