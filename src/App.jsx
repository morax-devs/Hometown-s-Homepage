import './App.css'
import Hero from './components/Hero'
import About from './components/About'  
import Attractions from './components/Attractions'
import ThingsToDo from './components/ThingsToDo'
import VisitInfo from './components/VisitInfo'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Attractions />
      <ThingsToDo />
      <VisitInfo />
      <Footer />
    </div>
  )
}

export default App