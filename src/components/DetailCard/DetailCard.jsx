import '../DetailCard/DetailCard.scss'
import starIcon from '../../assets/icons/star-solid-full.svg'
import DetailPositionButtonGroup from '../DetailPositionButtonGroup/DetailPositionButtonGroup'
import { useState } from 'react'

function DetailCard({ cards, initialCard, onClose }){
    const [activeCard, setActiveCard] = useState(initialCard)
    const getInitialPosition = () => {
        if (initialCard.id === cards.past.id) return 'past'
        if (initialCard.id === cards.present.id) return 'present'
        return 'future'
    }

    const [activePosition, setActivePosition] = useState(getInitialPosition())

    const handlePositionChange = (position) => {
        setActivePosition(position)

        setActiveCard(cards[position])
    }

    if (!activeCard) return null

  return (
    <div className='detail-card-overlay'>
        <section className='detail-card'>
            <button className='detail-card__close-button' onClick={onClose} aria-label='Cerrar modal'>X</button>

            <div className='detail-card__images-container'>
                <div className='detail-card__arcane-image'>
                    <img src={activeCard.arcaneImage?.imageSrc} alt={activeCard.arcaneName} />
                    <span className='detail-card__arcane-author'>Author: {activeCard.arcaneImage?.author || '' }</span>
                </div>
            
            <div className='detail-card__goddess-image'>
                {activeCard.goddessImage?.imageSrc && (
                    <img src={activeCard.goddessImage.imageSrc} alt={activeCard.goddessName} 
                    />
                    )}

                <span className='detail-card__goddess-author'>Author: {activeCard.goddessImage?.author || '' }</span>
            </div>
            
        </div>
        
        <section className='detail-card__information'>
            <div className='detail-card__arcane'>
                <h1 className='detail-card__arcane-title'>{activeCard.arcaneName}</h1>
                <p className='detail-card__arcane-description'>{activeCard.arcaneDescription || '' }</p>
            </div>
            
            <div className='detail-card__goddess'>

                <div className='detail-card__main'>
                    <img className='detail-card__star-icon' src={starIcon} alt="Four point star" />
                    <h2 className='detail-card__goddess-title'>{activeCard.mainTitle || '' }</h2>
                </div>

                <p className='detail-card__goddess-name'>{activeCard.goddessName || '' }</p>
                <p className='detail-card__goddess-description'>{activeCard.goddessDescription || '' }</p>
            
            </div>
        </section>

        <div className='detail-card__buttons'> 
            <DetailPositionButtonGroup
            activePosition={activePosition}
            onPositionChange={handlePositionChange}
            />
        </div>

    </section>
    </div>
    
  )
}

export default DetailCard