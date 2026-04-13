import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='RobotWebInfo'>
      {/* Intro + Description */}
      <section className = "IntroTitle">
        <div className = "IntroTitleText">
          <h1>Food Delivery Robot</h1>
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
    <p>This robot transports food using sensor-based navigation, motor control, 
    and wireless communication through an ESP32.</p>
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
            <img src = {`${import.meta.env.BASE_URL}gallery-1.png`} alt="Prototype testing" />
            <figcaption>Prototype testing</figcaption>
          </figure>
          <figure>
            <img src = {`${import.meta.env.BASE_URL}gallery-2.png`} alt="Navigation test" />
            <figcaption>Navigation test</figcaption>
          </figure>
          <figure>
            <img src = {`${import.meta.env.BASE_URL}gallery-3.png`} alt="Final design" />
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