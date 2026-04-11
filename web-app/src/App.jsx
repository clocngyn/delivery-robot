import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Designteam from './Pages/Designteam'
import Hardwareteam from './Pages/Hardwareteam'
import Softwareteam from './Pages/Softwareteam'
import About from './Pages/About'
import NavBar from './components/NavBar'

function App() {
  return (
    <HashRouter>
      <div className="MainApp">
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Designteam" element={<Designteam />} />
          <Route path="/Hardwareteam" element={<Hardwareteam />} />
          <Route path="/Softwareteam" element={<Softwareteam />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
