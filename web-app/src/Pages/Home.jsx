import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Page">
      <header className="Intro">
        <div className="IntroTitle">
          <h1>Food Delivery Robot</h1>
          <ul className="IntroDescription">
            <li>An engineering project combining mechanical design, embedded systems, and software. This robot transports food using sensor-based navigation, motor control, and wireless communication through an ESP32.</li>
          </ul>
        </div>
        <img
          className="robot-pic"
          src={`${import.meta.env.BASE_URL}robot-real.png`}
          /* Robot pic */
        />
      </header>

      <section id="features" className="Home-features">
        <h2>Features</h2>
        <ul className="Home-feature-list">
          <li className="feature-item">
            <span className="feature-text">Obstacle Detection</span>
          </li>
          <li className="feature-item">
            <span className="feature-text">Suspension</span>
          </li>
          <li className="feature-item">
            <span className="feature-text">Wireless Control (ESP32)</span>
          </li>
          <li className="feature-item">
            <span className="feature-text">Modular Design</span>
          </li>
        </ul>
      </section>

      <div className="Home-grid">
        <div className="info-card">
          <h3>Overall Solution</h3>
          <p><strong>Problem:</strong> Food delivery using a seperate entityrequires safe navigation and obstacle avoidance in real environments.</p>
          <p><strong>Solution:</strong> This robot uses sensors, a 4-wheel drive system, and an ESP32. This allows it to move safely and respond in real time.</p>
        </div>

        <div className="info-card">
          <h3>System Overview</h3>
          <p><strong>Components:</strong> ESP32, motor driver, motors, sensors, battery</p>
          <p><strong>Flow:</strong> User → ESP32 → Motors <br /> Sensors → ESP32 → Adjust movement</p>
        </div>

        <div className="info-card">
          <h3>Navigation Flow</h3>
          <ol className="styled-list">
            <li>User sends a command</li>
            <li>ESP32 processes input</li>
            <li>Sensors detect obstacles</li>
            <li>Robot adjusts movement</li>
            <li>Robot completes navigation</li>
          </ol>
        </div>

        <div className="info-card">
          <h3>Setup Guide</h3>
          <ol className="styled-list">
            <li>Turn the robot on, allowing it to search for its coded WiFi network.</li>
            <li>When connected, it hosts a small web server and gets an IP address.</li>
            <li>Connect your device to the <strong>same WiFi</strong> as the robot.</li>
            <li>Open a browser and go to the IP address to control the robot.</li>
          </ol>
        </div>
      </div>

      <section className="Home-pics">
        <h2>Photos</h2>
        <div className="Home-gallery-grid">
          <figure className="gallery-item">
            <img
              className="pic-1"
              src={`${import.meta.env.BASE_URL}gallery-1.png`}
              alt="Prototype testing"
            />
            <figcaption>Prototype testing</figcaption>
          </figure>
          <figure className="gallery-item">
            <img
              className="pic-2"
              src={`${import.meta.env.BASE_URL}gallery-2.png`}
              alt="Navigation test"
            />
            <figcaption>Navigation test</figcaption>
          </figure>
          <figure className="gallery-item">
            <img
              className="pic-3"
              src={`${import.meta.env.BASE_URL}gallery-3.png`}
              alt="Final design"
            />
            <figcaption>Final design</figcaption>
          </figure>
        </div>
      </section>

      <section className="Home-team bottom-section">
        <h2>Explore</h2>
        <ul className="Home-team-list explore-links">
          <li>
            <Link to="/About" className="explore-link">About the Team</Link>
          </li>
          <li>
            <Link to="/Designteam" className="explore-link">Design Team</Link>
          </li>
          <li>
            <Link to="/Hardwareteam" className="explore-link">Hardware Team</Link>
          </li>
          <li>
            <Link to="/Softwareteam" className="explore-link">Software Team</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
