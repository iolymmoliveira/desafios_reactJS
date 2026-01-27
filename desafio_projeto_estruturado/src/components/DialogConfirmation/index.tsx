import "./styles.css";
import Button from "../Button";

type Props = {
  message: string;
  onDialogAnswer: Function;
};

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {
  return (
    <div className="dsc-dialog-container" onClick={() => onDialogAnswer(false)}>
      <div
        className="dsc-dialog-box"
        onClick={(event) => event?.stopPropagation()}
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-confirmation-buttons">
          <Button
            text="Não"
            variant="secondary"
            className="dsc-dialog-button"
            onClick={() => onDialogAnswer(false)}
          />
          <Button
            text="Sim"
            variant="primary"
            className="dsc-dialog-button"
            onClick={() => onDialogAnswer(true)}
          />
        </div>
      </div>
    </div>
  );
}
