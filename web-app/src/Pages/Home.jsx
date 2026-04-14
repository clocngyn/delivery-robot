import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='RobotWebInfo'>
      {/* Intro + Description */}
      <section className = "IntroTitle">
        <div className = "IntroTitleText">
          <h1> PIyber Truck</h1>
        </div>
        <img
          className = "HomeRobotImg"
          src = {`${import.meta.env.BASE_URL}robot-real.png`}
        />
      </section>


{/* Info Boxes */}
<section className = "InfoBoxes">
  <div className = "RobotBoxes">
    <h3>Overview</h3>
    <p>This project was about making a food delivery robot, designed to carry a small payload and travel from point A to point B with stability and control. It was built by a fourteen person team over the course of seven weeks. The robot integrates embedded electronics, mobility systems, structural design, and ESP32 based navigation software into a cohesive platform.</p>
  </div>
  <div className = "RobotBoxes">
    <h3>Features</h3>
    <ul>
      <li>Obstacle Detection</li>
      <li>Suspension</li>
      <li>Modular Design</li>
      <li>Wireless Control</li>
    </ul>
  </div>
  <div className = "RobotBoxes">
    <h3>Navigation Flow</h3>
    <ol>
      <li>User sends a command</li>
      <li>ESP32 processes input</li>
      <li>Sensors detect obstacles</li>
      <li>Robot adjusts movement</li>
      <li>Robot completes navigation</li>
    </ol>
  </div>
  <div className = "RobotBoxes">
    <h3>Setup Guide</h3>
    <ol>
      <li>Turn the robot on so it searches for its WiFi network.</li>
      <li>When connected, it hosts a web server and gets an IP address.</li>
      <li>Connect your device to the <strong>same WiFi</strong> as the robot.</li>
      <li>Open a browser and go to the IP address to control the robot.</li>
    </ol>
  </div>
</section>

      {/* Photos */}
      <section className = "HomePhotos">
        <h2>Photos</h2>
        <div className = "HomeGrid">
          <figure>
            <img src = {`${import.meta.env.BASE_URL}Body.png`}/>
            <figcaption>Body Test Fitting</figcaption>
          </figure>
          <figure>
            <img src = {`${import.meta.env.BASE_URL}gallery-2.png`}/>
            <figcaption>Suspension Testing</figcaption>
          </figure>
          <figure>
            <img src = {`${import.meta.env.BASE_URL}gallery-3.png`} />
            <figcaption>Final design</figcaption>
          </figure>
        </div>
      </section>

      {/* Links to other pages */}
      <section className="IntroExplore">
        <h2>Explore</h2>
        <div className="IntroExploreGrid">
          <Link to ="/About" className = "ExploreButton">About the Team</Link>
          <Link to ="/Designteam" className ="ExploreButton">Design Team</Link>
          <Link to ="/Hardwareteam" className ="ExploreButton">Hardware Team</Link>
          <Link to ="/Softwareteam" className ="ExploreButton">Software Team</Link>
        </div>
      </section>
    </div>
  )
}

export default Home