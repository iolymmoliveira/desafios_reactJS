import "./style.css";

export default function Cars() {
  return (
    <>
      <section id="ds-cars">
        <div className="ds-cars-container flex align-center justify-center">
          <div className="ds-cars-title">
            <h2>Venha nos visitar</h2>
          </div>
          <div className="ds-cars-card">
            <img src="./src/assets/car-card.svg" alt="car" />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="ds-cars-card">
            <img src="./src/assets/car-card.svg" alt="car" />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </section>
    </>
  )
}
