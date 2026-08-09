import { Link, NavLink } from 'react-router-dom'

function Navbar({ tripCount }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">📍 Discover Prayagraj</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/attractions" className={({ isActive }) => isActive ? "active" : ""}>Attractions</NavLink>
        <NavLink to="/my-trip" className={({ isActive }) => isActive ? "active" : ""}>
          My Trip {tripCount > 0 && <span className="trip-badge">{tripCount}</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar