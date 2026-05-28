import DetailPositionButton from "../DetailPositionButton/DetailPositionButton";

const POSITIONS = [
  { id: 'past',    label: 'Pasado',   symbol: '\u263D' },
  { id: 'present', label: 'Presente', symbol: '\u2600' },
  { id: 'future',  label: 'Futuro',   symbol: '\u2605' },
];

const DetailPositionButtonGroup = ({ activePosition, onPositionChange }) => {
  return (
    <nav className="detail-position-nav" aria-label="Seleccionar la posición de la carta de la que se quiere obtener el detalle">
      {POSITIONS.map(({ id, label, symbol }) => (
        <DetailPositionButton key={id} position={id} label={label} symbol={symbol} isActive={activePosition === id} onClick={() => { onPositionChange (id)}}
        />
      ))}
    </nav>
  );
};

export default DetailPositionButtonGroup;