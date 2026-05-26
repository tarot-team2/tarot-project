import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import './SummaryPage.scss'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import Button from '../../components/Button/Button'

const SummaryPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (!state?.selectedCards) {
      navigate('/mazo')
    }
  }, [state, navigate])

  if (!state?.selectedCards) {
    return null
  }

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
        <SummaryCard position="past"    card={past} />
        <SummaryCard position="present" card={present} />
        <SummaryCard position="future"  card={future} />
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