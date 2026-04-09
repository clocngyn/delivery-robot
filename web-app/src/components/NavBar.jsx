import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/Designteam">Design Team</NavLink>
      <NavLink to="/Hardwareteam">Hardware Team</NavLink>
      <NavLink to="/Softwareteam">Software Team</NavLink>
    </nav>
  )
}

export default NavBar
