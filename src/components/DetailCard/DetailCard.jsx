import React from 'react'
import '../DetailCard/DetailCard.scss'
import starIcon from '../../assets/icons/star-solid-full.svg'

function DetailCard() {
    const card = {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        author: "Pamela Coleman Smith, Rider-Waite Tarot",
        arcaneName: "El Loco",
        arcaneDescription: "El viaje del Loco hacia el Mundo comienza en el número 0, un punto incierto donde todo es posible y se requiere una gran dosis de fe. Esta carta representa a quienes se aventuran en territorios inexplorados y llenos de misterio. Es la manifestación del impulso de lanzarse al abismo sin garantías.",
        mainTitle: "DIOSA CONTEMPORANEA",
        goddessImage: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Fei-Fei_Li_at_AI_for_Good_2017.jpg",
        authorGoddess: "ITU Pictures, CC BY 2.0, via Wikimedia Commons",
        goddessName: "Fei-Fei Li",
        goddessDescription: "Fei-Fei Li es una destacada científica de la computación y experta en inteligencia artificial. Es conocida por su trabajo en visión por computadora y aprendizaje profundo, y ha sido una defensora de la diversidad en el campo de la tecnología. Su enfoque innovador y su dedicación a la ética en la IA la convierten en una figura inspiradora en el mundo de la tecnología."
    }
  return (
    <div className='detail-card-overlay'>
        <section className='detail-card'>
            <button className='detail-card__close-button'>X</button>
            <div className='detail-card__images-container'>
                <div className='detail-card__arcane-image'>
                    <img src={card.imageSrc} alt={card.arcaneName} />
                    <span className='detail-card__arcane-author'>Author: {card.author}</span>
            </div>
            
            <div className='detail-card__goddess-image'>
                <img src={card.goddessImage} alt={card.goddessName} />
                <span className='detail-card__goddess-author'>Author: {card.authorGoddess}</span>
            </div>
            
        </div>
        
        <section className='detail-card__information'>
            <div className='detail-card__arcane'>
                <h1 className='detail-card__arcane-title'>{card.arcaneName}</h1>
                <p className='detail-card__arcane-description'>{card.arcaneDescription}</p>
            </div>
            
            <div className='detail-card__goddess'>

                <div className='detail-card__main'>
                    <img className='detail-card__star-icon' src={starIcon} alt="Four point star" />
                    <h2 className='detail-card__goddess-title'>{card.mainTitle}</h2>
                </div>

                <p className='detail-card__goddess-name'>{card.goddessName}</p>
                <p className='detail-card__goddess-description'>{card.goddessDescription}</p>
            
            </div>
        </section>

        <div className='detail-card__bottons'> 
            Espacio botones
        </div>

    </section>
    </div>
    
  )
}

export default DetailCard