import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Designteam">Design Team</NavLink></li>
        <li><NavLink to="/Hardwareteam">Hardware Team</NavLink></li>
        <li><NavLink to="/Softwareteam">Software Team</NavLink></li>
        <li><NavLink to="/PhotoGallery">Photo Gallery</NavLink></li>
        <li>
          <a href="https://github.com/clocngyn/delivery-robot" target="_blank" rel="noopener noreferrer" className="GithubNav">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar