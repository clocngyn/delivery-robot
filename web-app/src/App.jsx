import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Designteam from './Pages/Designteam'
import Hardwareteam from './Pages/Hardwareteam'
import Softwareteam from './Pages/Softwareteam'
import NavBar from './components/NavBar'

function App() {
  return (
    <HashRouter>
      <div className="Home">
        <header className="Intro">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Designteam" element={<Designteam />} />
          <Route path="/Hardwareteam" element={<Hardwareteam />} />
          <Route path="/Softwareteam" element={<Softwareteam />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
