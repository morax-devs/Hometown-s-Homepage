import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'  
import Attractions from './components/Attractions'
import ThingsToDo from './components/ThingsToDo'
import VisitInfo from './components/VisitInfo'
import Footer from './components/Footer'

function App() {
  const [tripList, setTripList] = useState([])

  function addToTrip(title) {
    if (!tripList.includes(title)) {
      setTripList([...tripList, title])
    }
  }

  return (
    <div>
      <Hero />
      <About />
      <Attractions tripList={tripList} addToTrip={addToTrip} />
      <ThingsToDo />
      <VisitInfo />
      <Footer />
    </div>
  )
}

export default App