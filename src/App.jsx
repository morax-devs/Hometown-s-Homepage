import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AttractionsPage from './pages/AttractionsPage'
import RestaurantsPage from './pages/RestaurantsPage'
import StayPage from './pages/StayPage'
import MyTrip from './pages/MyTrip'
import Footer from './components/Footer'

function App() {
  const [tripList, setTripList] = useState([])

  function addToTrip(title) {
    if (!tripList.includes(title)) {
      setTripList([...tripList, title])
    }
  }

  return (
    <BrowserRouter>
      <Navbar tripCount={tripList.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<AttractionsPage tripList={tripList} addToTrip={addToTrip} />} />
        <Route path="/my-trip" element={<MyTrip tripList={tripList} />} />
        <Route path="/restaurants" element={<RestaurantsPage tripList={tripList} addToTrip={addToTrip} />} />
        <Route path="/stay" element={<StayPage tripList={tripList} addToTrip={addToTrip} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App