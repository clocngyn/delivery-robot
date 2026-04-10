import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="site-nav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <span className="nav-sep">|</span>
      <NavLink to="/About">About</NavLink>
      <span className="nav-sep">|</span>
      <NavLink to="/Designteam">Design Team</NavLink>
      <span className="nav-sep">|</span>
      <NavLink to="/Hardwareteam">Hardware Team</NavLink>
      <span className="nav-sep">|</span>
      <NavLink to="/Softwareteam">Software Team</NavLink>
    </nav>
  )
}

export default NavBar
