import "./styles.css";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ text, onClick, variant, className }: ButtonProps) {

  return (
    <div 
      className={`dsc-button ${variant ? `dsc-button-${variant}` : ''} ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}