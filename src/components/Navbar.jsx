import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ tripCount }) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        📍 Discover Prayagraj
      </Link>

      <button
        className="nav-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/planner" className={({ isActive }) => isActive ? "active nav-ai-link" : "nav-ai-link"} onClick={closeMenu}>
          ✨ AI Agent
        </NavLink>
        <NavLink to="/attractions" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
          Attractions
        </NavLink>
        <NavLink to="/restaurants" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
          Restaurants
        </NavLink>
        <NavLink to="/stay" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
          Stay
        </NavLink>
        <NavLink to="/my-trip" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
          My Trip {tripCount > 0 && <span className="trip-badge">{tripCount}</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar