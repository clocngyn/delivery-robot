import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Designteam from './Pages/Designteam'
import Hardwareteam from './Pages/Hardwareteam'
import Softwareteam from './Pages/Softwareteam'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Designteam" element={<Designteam />} />
        <Route path="/Hardwareteam" element={<Hardwareteam />} />
        <Route path="/Softwareteam" element={<Softwareteam />} />
      </Routes>
    </HashRouter>
  )
}
export default App
