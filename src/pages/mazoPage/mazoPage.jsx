import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import './mazoPage.scss'
import DeckFaceDownCard from '../../components/DeckFaceDownCard/DeckFaceDownCard'
import FaceDownCard from '../../components/FaceDownCard/FaceDownCard'
import SelectedFaceDownCard from '../../components/SelectedFaceDownCard/SelectedFaceDownCard'
import Button from '../../components/Button/Button'
import TarotApiService from '../../service/TarotApiService'

const MazoPage = () => {
  const navigate = useNavigate()

  const [cards, setCards] = useState([])

  const [selectedCards, setSelectedCards] = useState({
    past: null,
    present: null,
    future: null,
  })

  useEffect(() => {
    TarotApiService.getAllCards()
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching cards:', error))
  }, [])

  const handleSelectCard = (cardId) => {
    const fullCard = cards.find(card => card.id === cardId)
    if (!selectedCards.past) {
      setSelectedCards({ ...selectedCards, past: fullCard })
    } else if (!selectedCards.present) {
      setSelectedCards({ ...selectedCards, present: fullCard })
    } else if (!selectedCards.future) {
      setSelectedCards({ ...selectedCards, future: fullCard })
    }
  }

  const handleDeselectCard = (position) => {
    setSelectedCards({ ...selectedCards, [position]: null })
  }

  const selectedCount = Object.values(selectedCards).filter(Boolean).length

  const isReadingComplete = selectedCount === 3

  const handleReveal = () => {
    if (isReadingComplete) {
      navigate('/summary', { state: { selectedCards } })
    }
  }

  return (
    <div className='mazo-page'>
      <div className='mazo-page__header'>
        <h1 className='mazo-page__title'>El Mazo</h1>
        <p className='mazo-page__subtitle'>Elige una carta para cada posición.</p>
      </div>

      <section className="mazo-page__slots">
        <DeckFaceDownCard
          type='pasado'
          cardName={selectedCards.past ? 'Seleccionada' : null}
          onClick={() => handleDeselectCard('past')}
        />
        <DeckFaceDownCard
          type='presente'
          cardName={selectedCards.present ? 'Seleccionada' : null}
          onClick={() => handleDeselectCard('present')}
        />
        <DeckFaceDownCard
          type='futuro'
          cardName={selectedCards.future ? 'Seleccionada' : null}
          onClick={() => handleDeselectCard('future')}
        />
      </section>

      <div className='mazo-page__actions'>
        <p className='mazo-page__count'>
          Seleccionadas: <span>{selectedCount}</span> / 3
        </p>
        <Button
          label="Revela tu lectura"
          onClick={handleReveal}
        />
      </div>

      <section className='mazo-page__grid'>
        {cards.map(card => {
          const position = Object.entries(selectedCards).find(
            ([, id]) => id === card.id
          )?.[0]

          if (position) {
            return (
              <SelectedFaceDownCard
                key={card.id}
                position={position}
                cardId={card.id}
                onDeselect={() => handleDeselectCard(position)}
              />
            )
          }

          return (
            <FaceDownCard
              key={card.id}
              card={card}
              onSelect={handleSelectCard}
              isDisabled={isReadingComplete}
              position={position}
            />
          )
        })}
      </section>
    </div>
  )
}

export default MazoPage