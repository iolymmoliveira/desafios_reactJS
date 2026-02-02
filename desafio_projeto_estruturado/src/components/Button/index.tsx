import "./styles.css";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ text, onClick, variant, className }: ButtonProps) {

  return (
    <button 
      className={`dsc-button ${variant ? `dsc-button-${variant}` : ''} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}