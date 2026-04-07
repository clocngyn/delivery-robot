import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Deliveries, setDeliveries] = useState(0)

  return (
    <div className = "Home">
      {/* Intro */}
      <header className = "header">
       <h1>Food Delivery Robot</h1>
       <p>Project created by Pi Class</p>
      </header>
      
    
    </div>
  )
}

export default App
