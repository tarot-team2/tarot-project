import Tag from '../../components/Tag/Tag';
import Button from '../../components/Button/Button';
import './LandingPage.scss';

const previewCards = [
  { position: 'past',    label: 'PASADO',   icon: '\u263D' },
  { position: 'present', label: 'PRESENTE', icon: '\u2736', isMain: true },
  { position: 'future',  label: 'FUTURO',   icon: '\u2605' },
];

const LandingPage = () => {
  const handleStart = () => window.location.href = '/mazo';

  return (
    <div className="landing-page">
      <main className="landing-page__main" role="main">
        <div className="landing-page__content-layout">

          <section className="landing-page__hero">
            <div className="landing-page__tag-wrapper">
              <Tag text="Women in STEM" />
            </div>

            <h1 className="landing-page__title">
              Contemporary{' '}
              <span className="landing-page__title--italic">Goddesses</span>{' '}
              Tarot
            </h1>

            <p className="landing-page__positions-row">
              PASADO &middot; PRESENTE &middot; FUTURO
            </p>

            <p className="landing-page__description">
              Un homenaje a las mujeres que lideran en ciencia,
              tecnologia, ingenieria y matematicas. Descubre que diosa
              te acompana hoy.
            </p>

            <div className="landing-page__actions">
              <Button
                label="Comenzar mi lectura"
                onClick={handleStart}
              />
            </div>
          </section>

          <section
            className="landing-page__visual"
            aria-label="Visualizacion interactiva del mazo"
          >
            <div className="landing-page__cards-container">
              {previewCards.map((card) => (
                <button
                  key={card.position}
                  type="button"
                  onClick={handleStart}
                  className={[
                    'landing-preview-card',
                    `landing-preview-card--${card.position}`,
                    card.isMain ? 'landing-preview-card--featured' : '',
                  ].join(' ')}
                  aria-label={`Ir al mazo - posicion ${card.label}`}
                >
                  <div className="landing-preview-card__border" />
                  <div className="landing-preview-card__content">
                    <span className="landing-preview-card__icon">{card.icon}</span>
                    <span className="landing-preview-card__label">{card.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default LandingPage;