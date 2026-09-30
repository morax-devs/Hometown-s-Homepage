import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AttractionsPage from './pages/AttractionsPage'
import RestaurantsPage from './pages/RestaurantsPage'
import StayPage from './pages/StayPage'
import MyTrip from './pages/MyTrip'
import AiPlanner from './pages/AiPlanner'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const STORAGE_KEY = 'prayagraj_trip_planner'

function App() {
  const [tripList, setTripList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return []
      const parsed = JSON.parse(saved)
      // Normalize legacy string format if present
      return parsed.map((item) =>
        typeof item === 'string'
          ? { id: item, title: item, category: 'Attraction', image: '/sangam.webp', description: '' }
          : item
      )
    } catch (e) {
      console.error('Error loading trip from localStorage:', e)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tripList))
    } catch (e) {
      console.error('Error saving trip to localStorage:', e)
    }
  }, [tripList])

  function addToTrip(item) {
    setTripList((prev) => {
      const id = item.id || item.title || item.name
      if (prev.some((existing) => (existing.id || existing.title || existing.name) === id)) {
        return prev
      }
      return [...prev, { ...item, id }]
    })
  }

  function removeFromTrip(id) {
    setTripList((prev) =>
      prev.filter((existing) => (existing.id || existing.title || existing.name) !== id)
    )
  }

  function clearTrip() {
    setTripList([])
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar tripCount={tripList.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/planner"
          element={<AiPlanner tripList={tripList} addToTrip={addToTrip} />}
        />
        <Route
          path="/attractions"
          element={<AttractionsPage tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />}
        />
        <Route
          path="/my-trip"
          element={<MyTrip tripList={tripList} removeFromTrip={removeFromTrip} clearTrip={clearTrip} />}
        />
        <Route
          path="/restaurants"
          element={<RestaurantsPage tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />}
        />
        <Route
          path="/stay"
          element={<StayPage tripList={tripList} addToTrip={addToTrip} removeFromTrip={removeFromTrip} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App