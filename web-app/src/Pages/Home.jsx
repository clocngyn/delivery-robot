import '../App.css'

function Home() {
  return (
    <div className="Home">
      <header className="Intro">
        <h1>Autonomous Food Delivery Robot</h1>
        <p className="Home-credit">
          Created by <strong>Pi Class</strong>
        </p>
        <img
          className="Home-robot-img"
          src={`${import.meta.env.BASE_URL}robot-real.png`}
          alt="Food delivery robot"
        />
      </header>

      <section className="About">
        <h2>About This Project</h2>
        <p>
          We are building a small autonomous robot that can deliver food from one location to
          another. The robot is about the size of a compact cooler and is designed to move safely
          and stay stable while carrying a small payload.
        </p>
        <p>
          This project combines hardware and software. We use embedded systems like Arduino, ESP32,
          or Raspberry Pi, plus motors, sensors, and navigation code. The goal is to make a robot
          that can move from point A to point B with good control and reliability.
        </p>
      </section>
    </div>
  )
}

export default Home
