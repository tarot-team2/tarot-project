import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import './SummaryPage.scss'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import Button from '../../components/Button/Button'

const SummaryPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const fakeCard = {

    arcaneNumber: "Arcano 0",
    name: "El Loco",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    meaning: "El viaje del Loco hacia el Mundo comienza en el número 0, un punto incierto donde todo es posible y se requiere una gran dosis de fe. Esta carta representa a quienes se aventuran en territorios inexplorados y llenos de misterio. Es la manifestación del impulso de lanzarse al abismo sin garantías.",
    goddessName: "Fei-Fei Li"
  }

  /*useEffect(() => {
    if (!state?.selectedCards) {
      navigate('/mazo')
    }
  }, [state, navigate])

  if (!state?.selectedCards) {
    return null
  }*/

  const { past, present, future } = state.selectedCards

  const handleSaveReading = () => {
    if (!userName.trim()) return
    console.log('guardar lectura', { userName, past, present, future })
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
        <SummaryCard position="past"    card={fakeCard} />
        <SummaryCard position="present" card={fakeCard} />
        <SummaryCard position="future"  card={fakeCard} />
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
      {/*<SaveLectureForm /> no se puede usar porque no admite props*/}

    </div>
  )
}

export default SummaryPage