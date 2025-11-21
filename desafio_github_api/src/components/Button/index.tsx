import './style.css';

interface ButtonProps {
  textButton: string;
  onClick?: () => void;
}

export default function Button ({textButton, onClick}: ButtonProps) {

  return (
    <button className="dsgh-btn-primary" type="submit" onClick={onClick}>
      {textButton}
    </button>
  );
}