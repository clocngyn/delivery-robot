import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <header className="Intro">
        <h1>Autonomous Food Delivery Robot</h1>
        <p className="Home-credit">
          Created by <strong>Pi Class</strong> — interdisciplinary teams in design, hardware, and
          software building one integrated system.
        </p>
        <img
          className="Home-robot-img"
          src={`${import.meta.env.BASE_URL}robot-temp.svg`}
          alt="Temporary illustration of a delivery robot (replace with a project photo later)"
          width={320}
          height={280}
        />
      </header>

      <section className="About">
        <h2>What this project is</h2>
        <p>
          This is a <strong>small-scale autonomous food delivery robot</strong>—about the size of a
          compact cooler—built to move a payload safely from one place to another. The emphasis is
          on <strong>efficiency, stability, and mobility</strong>, not on being large: the chassis
          holds a small cooler securely so it does not tip or shift during motion.
        </p>
        <p>
          The full system combines <strong>embedded electronics</strong> (Arduino, ESP32, or
          Raspberry Pi), <strong>motor control and drivetrain</strong>,{' '}
          <strong>structural and mechanical design</strong>, and <strong>software for navigation and
          control</strong>. Together, the teams aim for a robot that can carry the cooler, drive with
          reliable control, and demonstrate real integration across disciplines—with room for
          advanced features like obstacle sensing, line or waypoint navigation, or telemetry.
        </p>
        <p className="Home-links">
          <Link to="/">Home</Link>
          <Link to="/Designteam">Design team</Link>
          <Link to="/Hardwareteam">Hardware team</Link>
          <Link to="/Softwareteam">Software team</Link>
        </p>
      </section>
    </div>
  )
}

export default Home
