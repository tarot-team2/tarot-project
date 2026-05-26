import './Button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button className="cta-button" onClick={onClick}>
      <span className="cta-button__text">{label}</span>
    </button>
  );
};

export default Button;