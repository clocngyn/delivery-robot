import '../App.css'

function Designteam() {
  return (
    <div className="Home">
      <header className="Intro">
        <h1>Design Team</h1>
      </header>
      <section className="About">
        <p>
          The design team defines the robot body layout, payload compartment, and overall look so
          the delivery platform is practical, durable, and easy to use.
        </p>

        <h2>Team Members</h2>
        <ul className="team-members-list">
          <li className="team-member-lead">
            <span className="member-name">Member 1</span>
            <span className="member-role">Team Lead</span>
          </li>
          <li>
            <span className="member-name">Member 2</span>
          </li>
          <li>
            <span className="member-name">Member 3</span>
          </li>
          <li>
            <span className="member-name">Member 4</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Designteam
