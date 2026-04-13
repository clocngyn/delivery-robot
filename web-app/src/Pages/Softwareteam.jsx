import '../App.css'

function SoftwareTeam() {
  return (
    <>
      {/* Page Title */}
      <h1>Software Team</h1>

      {/* Overview Box */}
      <section className="SoftwareOverview">
        <div className="RobotBoxes">
          <h3>Overview</h3>
          <p>The software team developed the ESP32-based control and navigation system, managing movement, turning, stopping, and sensor-driven safety. They processed ultrasonic and obstacle-detection data, implemented real-time telemetry, obstacle avoidance, and web-app remote control, and maintained the GitHub repository to ensure smooth integration with the robot's electronics and mobility hardware.</p>
        </div>
      </section>
    </>
  )
}

export default SoftwareTeam