import './DetailPositionButtonGroup.scss';

const POSITIONS = [
  { id: 'past',    label: 'Pasado',   symbol: '\u263D' },
  { id: 'present', label: 'Presente', symbol: '\u2600' },
  { id: 'future',  label: 'Futuro',   symbol: '\u2605' },
];

const DetailPositionButtonGroup = ({ activePosition, onPositionChange }) => {
  return (
    <nav className="detail-position-nav" aria-label="Seleccionar la posición de la carta de la que se quiere obtener el detalle">
      {POSITIONS.map(({ id, label, symbol }) => (
        <button key={id} type="button" className={`detail-position-nav__btn detail-position-nav__btn--${id}${activePosition === id ? ' detail-position-nav__btn--active' : ''}`} onClick={() => onPositionChange(id)} aria-pressed={activePosition === id} aria-label={`Ver carta del ${label}`}>
          <span className="detail-position-nav__symbol" aria-hidden="true">{symbol}</span>
          <span className="detail-position-nav__label">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default DetailPositionButtonGroup;