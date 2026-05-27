import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import './LandingPage.scss';

const POSITION_CONFIG = {
  past:    { label: 'Pasado',   icon: '☽' },
  present: { label: 'Presente', icon: '☀' },
  future:  { label: 'Futuro',   icon: '★' },
};

const LandingCard = ({ position }) => {
  const navigate = useNavigate();
  const { label, icon } = POSITION_CONFIG[position];

  return (
    <button
      className={`landing-card landing-card--${position}`}
      onClick={() => navigate('/lecture')}
      type="button"
      aria-label={`Ir a la lectura — ${label}`}
    >
      <div className="landing-card__inner-border" />
      <span className="landing-card__icon" aria-hidden="true">{icon}</span>
      <span className="landing-card__label">{label}</span>
    </button>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartLecture = () => {
    navigate('/lecture');
  };

  return (
    <div className="landing-page">
      <main className="landing-page__main" role="main">
        
        <section className="landing-page__hero">
          <div className="tag">
            <span className="tag__circle"></span>
            <span className="tag__text">Women in STEM</span>
          </div>
          
          <h1 className="landing-page__title">
            Contemporary <span className="landing-page__title--italic">Goddesses</span> Tarot
          </h1>

          <p className="landing-page__description">
            Un homenaje a las mujeres que lideran en ciencia, tecnología, ingeniería y matemáticas.
          </p>

          <div className="landing-page__cta">
            <Button
              label="Comenzar mi lectura"
              onClick={handleStartLecture}
            />
          </div>
        </section>

        <section className="landing-page__cards-container" aria-label="Secciones de la lectura">
          <LandingCard position="past" />
          <LandingCard position="present" />
          <LandingCard position="future" />
        </section>

      </main>

      <footer className="footer">
        <p className="footer__text">
          © {new Date().getFullYear()} Contemporary Goddesses Tarot — Women in STEM
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
