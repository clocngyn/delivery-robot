import '../App.css'

function Hardwareteam() {
  return (
    <>
      {/* Page Title */}
      <h1>Hardware Team</h1>

      {/* Overview Box */}
      <section className="HardwareOverview">
        <div className="RobotBoxes">
          <h3>Overview</h3>
          <p>The hardware team builds the drivetrain, sensor wiring, battery system, and electronics
          integration that allow the delivery robot to move safely and carry a small cooler payload.</p>
        </div>
      </section>

      {/* Materials List */}
      <section className="HardwareMaterials">
        <h2>Materials</h2>
        <div className="RobotBoxes">
          <h3>Components List</h3>
          <ul>
            <li>ESP32 microcontroller</li>
            <li>Motor driver</li>
            <li>DC motors x4</li>
            <li>Ultrasonic sensors</li>
            <li>Battery pack</li>
            <li>Wiring and connectors</li>
          </ul>
        </div>
      </section>

      {/* Wiring Diagrams */}
      <section className="HardwareWiring">
        <h2>Wiring Diagrams</h2>
        <div className="RobotBoxes">
          <h3>Wiring Design</h3>
          <p>Hand-drawn wiring design for the robot electronics.</p>
          <img
            className="HardwareImg"
            src={`${import.meta.env.BASE_URL}WiringDiagram.png`}
            alt="Hand-drawn wiring design for the robot electronics"
          />
        </div>
      </section>
    </>
  )
}

export default Hardwareteam