import '../App.css'

function Hardwareteam() {
  return (
    <div className="Home">
      <header className="Intro">
        <h1>Hardware Team</h1>
      </header>
      <div className="Team-grid">
        <section className="About">
          <h2>Overview</h2>
          <p>
            The hardware team builds the drivetrain, sensor wiring, battery system, and electronics
            integration that allow the delivery robot to move safely and carry a small cooler payload.
          </p>
        </section>
      </div>

      <section className="Hardware-images">
        <h2>Wiring design</h2>
        <p className="Hardware-images-text">Wiring diagram / wiring plan for the robot.</p>
        <div className="Hardware-image-grid">
          <img
            className="Hardware-image"
            src={`${import.meta.env.BASE_URL}hardware-wiring.png`}
            alt="Hand-drawn wiring design for the robot electronics"
          />
        </div>
      </section>
    </div>
  )
}

export default Hardwareteam