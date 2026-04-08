import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Designteam } from './Pages/Designteam'
import { Hardwareteam } from './Pages/Hardwareteam'
import { Softwareteam } from './Pages/Softwareteam'

function App() {

  return (
  <HashRouter>
    <Route>
      <Route path = "/" element = { <Home/>}/>
      <Route path = "/Desginteam" element = { <Designteam/>}/>
      <Route path = "/Hardwareteam" element = { <Hardwareteam/>}/>
      <Route path = "/Softwareteam" element = { <Softwareteam/>}/>
    </Route>
  </HashRouter>
  )
}

export default App
