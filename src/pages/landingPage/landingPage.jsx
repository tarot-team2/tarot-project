import Tag from '../../components/Tag/Tag';
import Button from '../../components/Button/Button';
import LandingCard from '../../components/LandingCard/LandingCard';
import './LandingPage.scss';

const STARS = ['✦', '★', '✶', '✦', '✵', '★', '✦', '✶', '✵', '★', '✦', '✶']

const LandingPage = () => {
  const handleStart = () => window.location.href = '/mazo';

  return (
    <div className="landing-page">

      <div className="landing-page__stars" aria-hidden="true">
        {STARS.map((star, i) => (
          <span key={i} className="star-particle">{star}</span>
        ))}
      </div>

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
              tecnología, ingeniería y matemáticas. Descubre qué diosa
              te acompaña hoy.
            </p>
            <div className="landing-page__actions">
              <Button label="Comenzar mi lectura" onClick={handleStart} />
            </div>
          </section>

          <section
            className="landing-page__visual"
            aria-label="Visualización interactiva del mazo"
          >
            <div className="landing-page__cards-container">
              <LandingCard position="past" />
              <LandingCard position="present" featured />
              <LandingCard position="future" />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default LandingPage;