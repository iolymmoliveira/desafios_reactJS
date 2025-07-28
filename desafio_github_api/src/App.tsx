import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        Projeto em 'Branco'

        <h2>Contador 
          <span> = {count}</span>
        </h2>
      </div>
      <div>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
      </div>
    </>
  )
}

export default App
