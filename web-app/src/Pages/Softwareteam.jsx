import '../App.css'

function SoftwareTeam() {
  return (
    <div className="SoftwarePage">
      {/* Page Title */}
      <h1>Software Team</h1>

      {/* Overview Box */}
      <section className="SoftwareOverview">
        <div className="RobotBoxes">
          <h3>Overview</h3>
          <p>The software team developed the ESP32-based control and navigation system, managing movement, turning, stopping, and sensor-driven safety. They processed ultrasonic and obstacle-detection data, implemented real-time telemetry, obstacle avoidance, and web-app remote control, and maintained the GitHub repository to ensure smooth integration with the robot's electronics and mobility hardware.</p>
        </div>
      </section>

      {/* Diagrams */}
      <section className="SoftwareDiagrams">
        <h2>Diagrams</h2>
        <div className="SoftwareDiagramGrid">

          {/* Diagram 1 */}
          <div className="RobotBoxes">
            <h3>Use Case Diagram </h3>
            <img
              className="SoftwareImg"
              src={`${import.meta.env.BASE_URL}WebsiteUML.png`}
              alt="Software diagram 1"
            />
          </div>

          {/* Diagram 2 */}
          <div className="RobotBoxes">
            <h3>UML Diagram</h3>
            <img
              className="SoftwareImg"
              src={`${import.meta.env.BASE_URL}UMLDiagram.jpeg`}
              alt="Software diagram 2"
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default SoftwareTeam