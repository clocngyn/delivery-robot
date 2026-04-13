import '../App.css'

function Hardwareteam() {
  return (
    <div className='RobotWebInfo'>
      {/* Page Title */}
      <h1>Hardware Team</h1>

      {/* Overview Box */}
      <section className="HardwareOverview">
        <div className="RobotBoxes">
          <h3>Overview</h3>
          <p>The hardware team builds the drivetrain, battery system, sensor wiring, and full electronics integration that power the robot's movement and payload transport. They implement motors, power distribution, microcontroller links, and sensor hardware, forming the physical-electrical backbone that ensures reliable mobility and seamless operation with the ESP32-based navigation software.</p>
        </div>
      </section>

      {/* Materials List */}
      <section className="HardwareMaterials">
        <h2>Materials</h2>
        <div className="RobotBoxes">
          <h3>Components List</h3>
          <ul>
            <li>ESP32 Microcontroller x2</li>
            <li>Motor Driver x2</li>
            <li>DC Motors x4</li>
            <li>Ultrasonic Sensors x4</li>
            <li>DC-DC Converter x1</li>
            <li>Battery x1</li>
            <li>GPS Module</li>
            <li>Wires & Connectors</li>
          </ul>
        </div>
      </section>

      {/* Wiring Diagrams */}
      <section className="HardwareWiring">
        <h2>Wiring Diagram</h2>
        <div className="RobotBoxes">
          <h3>Wiring Design</h3>
          <img
            className="HardwareImg"
            src={`${import.meta.env.BASE_URL}WiringDiagram.png`}
            alt="Hand-drawn wiring design for the robot electronics"
          />
        </div>
      </section>
    </div>
  )
}

export default Hardwareteam