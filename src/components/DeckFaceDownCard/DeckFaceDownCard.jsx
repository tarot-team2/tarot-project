import React from 'react';
import './DeckFaceDownCard.scss';

const CARD_CONFIG = {
  pasado: { label: 'PASADO', icon: '🌙', modifier: 'past' },
  presente: { label: 'PRESENTE', icon: '☀️', modifier: 'present' },
  futuro: { label: 'FUTURO', icon: '⭐', modifier: 'future' }
};

const DeckFaceDownCard = ({ type = 'pasado', cardName, onClick }) => {
  const typeKey = type?.toLowerCase();
  const current = CARD_CONFIG[typeKey] || CARD_CONFIG.pasado;
  
  const isChosen = !!cardName;

  const handleClick = () => {
    if (onClick) {
      onClick(isChosen ? '' : type); 
    }
  };

  return (
    <button 
      className={`deck-facedown-card deck-facedown-card--${current.modifier} ${
        !isChosen ? 'deck-facedown-card--empty' : 'deck-facedown-card--selected'
      }`}
      onClick={handleClick}
      type="button"
      aria-label={`Carta de ${current.label}. ${isChosen ? `Seleccionada: ${cardName}` : 'Sin elegir'}`}
    >
      <span className="deck-facedown-card__icon" aria-hidden="true">
        {current.icon}
      </span>

      <span className="deck-facedown-card__label">{current.label}</span>
      
      <p className="deck-facedown-card__name">
        {isChosen ? cardName : 'Sin elegir'}
      </p>
    </button>
  );
};

export default DeckFaceDownCard;