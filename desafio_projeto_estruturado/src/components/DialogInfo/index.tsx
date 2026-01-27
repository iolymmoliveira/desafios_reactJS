import "./styles.css";
import Button from "../Button";

type Props = {
  message: string;
  onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {

  return (
    <div className="dsc-dialog-container" onClick={() => onDialogClose()} >
      <div className="dsc-dialog-box" onClick={(event) => event?.stopPropagation()} >
        <h2>{message}</h2>
        <Button text="Ok" variant="primary" className="dsc-dialog-button" onClick={() => onDialogClose()} />
      </div>
    </div>
  );
}