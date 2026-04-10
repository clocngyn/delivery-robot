import '../App.css'

function Designteam() {
  return (
    <div className="Home">
      <header className="Intro">
        <h1>Design Team</h1>
      </header>
      <div className="Team-grid">
        <section className="About">
          <h2>Overview</h2>
          <p>
            The design team defines the robot body layout, payload compartment, and overall look so
            the delivery platform is practical, durable, and easy to use.
          </p>
        </section>
      </div>

      <section className="Design-images">
        <h2>Design images</h2>
        <p className="Design-images-text">
          Container that holds the food + suspension design screenshots.
        </p>
        <div className="Design-image-grid">
          <img
            className="Design-image"
            src={`${import.meta.env.BASE_URL}design-container.png`}
            alt="Container design that holds the food"
          />
          <img
            className="Design-image"
            src={`${import.meta.env.BASE_URL}design-suspension.png`}
            alt="Suspension design for the robot"
          />
        </div>
      </section>
    </div>
  )
}

export default Designteam
