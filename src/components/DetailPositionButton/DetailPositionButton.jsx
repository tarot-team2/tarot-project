import './DetailPositionButton.scss';

const DetailPositionButton = ({ position, label, symbol, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={`detail-position-btn detail-position-btn--${position}${isActive ? ' detail-position-btn--active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`Ver carta del ${label}`}
    >
      <span className="detail-position-btn__symbol" aria-hidden="true">{symbol}</span>
      <span className="detail-position-btn__label">{label}</span>
    </button>
  );
};

export default DetailPositionButton;