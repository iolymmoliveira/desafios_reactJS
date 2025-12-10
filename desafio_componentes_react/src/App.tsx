import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cars from './components/Cars'
import Comments from './components/Comments'

function App() {

  return (
    <>
      <Header />
      <main>
        <Cars />
        <Comments />
      </main>
      <Footer />
    </>
  )
}

export default App
