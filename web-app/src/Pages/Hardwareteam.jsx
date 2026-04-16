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
            <li>GPS Module x1</li>
            <li>Wires & Connectors</li>
            <li>Wheels x4</li>
            <li>U Joint & Drive Shaft x4</li>
            <li>Wheels x4</li>
            <li>Bearings x4</li>
            <li>Shock Absorbers x4</li>
          </ul>
        </div>
      </section>

      {/* Circuit Diagrams */}
      <section className="HardwareWiring">
        <h2>Circuit Diagram</h2>
        <div className="RobotBoxes">
          <h3>Circuit Design</h3>
          <img
            className="HardwareImg"
            src={`${import.meta.env.BASE_URL}Wiring3.png`}
          />
        </div>
      </section>
    </div>
  )
}

export default Hardwareteam