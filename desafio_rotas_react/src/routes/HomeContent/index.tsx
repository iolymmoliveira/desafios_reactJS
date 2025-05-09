import "./style.css";

type Props = {
  title?: string;
}

export default function HomeContent({title} : Props) {

  return (
    <>
      <main id="ds-page-content">
        <h1>{title}</h1>
      </main>
    </>
  )
}