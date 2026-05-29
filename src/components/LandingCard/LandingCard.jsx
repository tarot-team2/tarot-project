import './LandingCard.scss'
import { useNavigate } from 'react-router'

// Props expected from parent (LandingPage):
// position — 'past' | 'present' | 'future'

const POSITION_CONFIG = {
  past:    { label: 'Pasado',   icon: '☽' },
  present: { label: 'Presente', icon: '☀' },
  future:  { label: 'Futuro',   icon: '★' },
}

const LandingCard = ({ position, featured = false }) => {
  const navigate = useNavigate()
  const { label, icon } = POSITION_CONFIG[position]

  return (
    <div
      className={[
        'landing-card',
        `landing-card--${position}`,
        featured ? 'landing-card--featured' : '',
      ].join(' ')}
      onClick={() => navigate('/mazo')}
      role="button"
      aria-label={`Ir a la lectura — ${label}`}
    >
      <div className="landing-card__inner-border" />
      <span className="landing-card__icon" aria-hidden="true">{icon}</span>
      <span className="landing-card__label">{label}</span>
    </div>
  )
}

export default LandingCard