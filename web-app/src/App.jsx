import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Deliveries, setDeliveries] = useState(0)

  return (
    <div className = "Home">
      {/* Intro */}
      <header className = "Intro">
       <h1>Food Delivery Robot</h1>
       <p>Project created by Pi Class</p>
      </header>
      
      <section className = "About">
        <h2>About the Project</h2>
        <p> The Pi class has been working hard all summer to bring to you a food delivery robot.
          It is designed to naviagate obstacles and traffic to accuratly reach it's destination in a quick
          manner to give food to it's user.
        </p>
      </section>
    
    </div>
  )
}

export default App
