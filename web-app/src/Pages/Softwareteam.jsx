import '../App.css'

function SoftwareTeam() {
  return (
    <div className = "Page">
      <header className = "Intro">
        <h1>Software Team</h1>
      </header>
      {/* Overview Box */}
      <section className="SoftwareOverview">
        <div className="RobotBoxes">
          <h3>Overview</h3>
          <p>The software team developed the ESP32-based control and navigation system, managing movement, turning, stopping, and sensor-driven safety. They processed ultrasonic and obstacle-detection data, implemented real-time telemetry of the robot's <strong>FILL IN LATER </strong>, obstacle avoidance, and web-app remote control, and maintained the GitHub repository to ensure smooth integration with the robot's electronics and mobility hardware.</p>
        </div>
      </section>
    </div>
  )
}

export default SoftwareTeam
