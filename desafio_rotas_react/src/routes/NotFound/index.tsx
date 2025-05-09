import "./style.css";

type Props = {
  url?: string;
  textLeft?: string;
  textRight?: string;
}

export default function NotFound({url, textLeft, textRight} : Props) {
  return (
    <>
      <main id="ds-not-found" className="flex align-center">
        <div className="ds-msg-left">{textLeft}</div>
        <img src={url} alt="Gif Not Found" className="animation-not-found"/>
        <div className="ds-msg-right">{textRight}</div>
      </main>
    </>
  )
}