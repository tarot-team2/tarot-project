import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import './SummaryPage.scss'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import Button from '../../components/Button/Button'
import DetailCard from '../../components/DetailCard/DetailCard'
import { saveReading } from '../../service/readingsAPI'


const SummaryPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [selectedCard, setSelectedCard] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!state?.selectedCards) {
      navigate('/mazo')
    }
  }, [state, navigate])

  if (!state?.selectedCards) {
    return null
  }

  const { past, present, future } = state.selectedCards

  const handleSaveReading = async () => {
    if (!userName.trim()) return

    const reading = {
      consultantName: userName,
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
        pastCard:{
          arcaneName: past.arcaneName,
          arcaneImage : {
            imageSrc: past.arcaneImage.imageSrc,        
          },
        },
        presentCard:{
          arcaneName: present.arcaneName,
          arcaneImage : {
            imageSrc: present.arcaneImage.imageSrc,        
          },
        },
        futureCard:{
          arcaneName: future.arcaneName,
          arcaneImage : {
            imageSrc: future.arcaneImage.imageSrc,        
          },
        },
    }
    try {
      await saveReading(reading)
      navigate('/history')
      
      alert('Lectura guardada correctamente')
      setUserName('')
      
    } catch (error) {
      console.error('Error al guardar la lectura:', error)

    }
  }

  const handleOpenModal = (card) => {
    setIsModalOpen(true)
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }


  return (
    <div className="summary-page">
      <section className="summary-page__hero">
        <h1 className="summary-page__title">Tu lectura</h1>
        <p className="summary-page__subtitle">
          Las diosas han hablado.
        </p>
      </section>

      <section className="summary-page__cards">
        <SummaryCard 
          position="past"    
          card={past} 
          onClick={() => handleOpenModal(past)}
        />
        <SummaryCard 
          position="present" 
          card={present} 
          onClick={() => handleOpenModal(present)}
        />
        <SummaryCard 
          position="future"  
          card={future}
          onClick={() => handleOpenModal(future)}
        />
      </section>

      <section className="summary-page__save">
        <h2 className="summary-page__save-title">Guarda tu lectura</h2>
        <div className="summary-page__form">
          <input
            className="summary-page__input"
            type="text"
            placeholder="Tu nombre..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button className="summary-page__button"
            label="Guardar"
            onClick={handleSaveReading}
          />
        </div>
      </section>
      
      {isModalOpen && (
        <DetailCard
        cards={{ past, present, future }}
        initialCard={selectedCard}
        onClose={handleCloseModal}
  />
)}
      {/*<SaveLectureForm /> no se puede usar porque no admite props*/}

    </div>
  )
}

export default SummaryPage