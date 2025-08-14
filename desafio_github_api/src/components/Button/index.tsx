import './style.css';

interface ButtonProps {
  textButton: string;  
}

export default function Button ({textButton}: ButtonProps) {

  return (
    <button className="dsgh-btn-primary" type="submit">
      {textButton}
    </button>
  );
}