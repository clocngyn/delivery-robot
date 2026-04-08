import '../App.css'
import { Link } from "react-router-dom"
function Home() {

  return (
    <div className = "Home">
      <header className = "Intro">
       <h1>Food Delivery Robot</h1>
       <Link to= "/"> Home </Link>
       <Link to= "/Designteam"> Designteam </Link>
       <Link to= "/Hardwareteam"> Hardwareteam </Link>
       <Link to= "/Softwareteam"> Softwareteam </Link>
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

export default Home
