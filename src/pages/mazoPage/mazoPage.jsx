import './mazoPage.scss'
import DeckFaceDownCard from '../../components/DeckFaceDownCard/DeckFaceDownCard'
import FaceDownCard from '../../components/FaceDownCard/FaceDownCard'
import Button from '../../components/Button/Button'

const MazoPage = () => {
  return (
    <div className='mazo-page'>

        <div className='mazo-page__header'>
            <h1 className='mazo-page__title'>El Mazo</h1>
            <p className='mazo-page__subtitle'>Elige una carta para cada posición.</p>
        </div>

        <section className="mazo-page__slots">
            <DeckFaceDownCard type='pasado' />
            <DeckFaceDownCard type='presente' />
            <DeckFaceDownCard type='futuro' />
        </section>

        <div className='mazo-page__actions'>
            <p className='mazo-page__count'>Seleccionadas: 0/3</p> {/* hardcodeado por ahora */}
            <Button />
        </div>

        <section className='mazo-page__grid'>
            {/* aquí van las cards */}
        </section>
      
    </div>
  )
}

export default MazoPage