import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Designteam } from './Pages/Designteam'
import { Hardwareteam } from './Pages/Hardwareteam'
import { Softwareteam } from './Pages/Softwareteam'
function App() {

  return (
  <Router>
    <Route>
      <Route path = "/" element = { <Home/>}/>
    </Route>
  </Router>
  )
}

export default App
