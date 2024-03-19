import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation/Navigation'
import ReleasesList from './components/ReleasesList'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ReleasesList />
      <Footer />
    </>
  )
}

export default App
