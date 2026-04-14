/* Pathway */
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Designteam from './Pages/Designteam'
import Hardwareteam from './Pages/Hardwareteam'
import Softwareteam from './Pages/Softwareteam'
import About from './Pages/About'
import NavBar from './components/NavBar'
import Photos from './Pages/Photos'

function App() {
  return (
    <HashRouter>
 <div className = "RobotWeb">
  <header>
    <NavBar />
  </header>
  <main className = "RobotWebInfo">
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Designteam" element = {<Designteam />} />
      <Route path="/Hardwareteam" element = {<Hardwareteam />} />
      <Route path="/Softwareteam" element = {<Softwareteam />} />
      <Route path="/About" element = {<About />} />
      <Route path="/PhotoGallery" element={<Photos />} />
    </Routes>
  </main>
</div>
    </HashRouter>
  )
}
export default App
