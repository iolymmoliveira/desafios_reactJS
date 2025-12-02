import { useState } from "react";
import Header from "./assets/components/Header"
import ListingBody from "./assets/components/ListingBody"
import { ContextCounterProduct } from "./utils/context-product";

function App() {

  const [contextCountProducts, setContextCountProducts] = useState<number>(0);

  return (
    <ContextCounterProduct.Provider value={{ contextCountProducts, setContextCountProducts }}>
      <Header/>
      <ListingBody/>
    </ContextCounterProduct.Provider>
  )
}

export default App
