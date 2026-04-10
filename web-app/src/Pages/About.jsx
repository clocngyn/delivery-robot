import '../App.css'

function About() {
  return (
    <div className="Home">
      <header className="Intro">
        <div className="Intro-text">
          <h1>About the Team</h1>
          <p className="Subtitle">
            Meet the students behind the Food Delivery Robot.
          </p>
        </div>
      </header>

      <div className="Team-grid">
        <section className="info-card">
          <h3>Design Team</h3>
          <ul className="team-members-list">
            <li className="team-member-lead member-with-pic">
              <img src={`${import.meta.env.BASE_URL}ted.png`} alt="Ted Um" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Ted Um</span>
                <span className="member-role">Team Lead</span>
              </div>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}khaku.png`} alt="Khaku Purev-Erdene" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Khaku Purev-Erdene</span>
              </div>
            </li>
            <li><span className="member-name">Alia Shaqur</span></li>
            <li><span className="member-name">Danijela Cavic</span></li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}hunter.png`} alt="Hunter Nguyen" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Hunter Nguyen</span>
              </div>
            </li>
            <li><span className="member-name">Natalee Ibarra</span></li>
            <li><span className="member-name">Billy Cam</span></li>
          </ul>
        </section>

        <section className="info-card">
          <h3>Hardware Team</h3>
          <ul className="team-members-list">
            <li className="team-member-lead">
              <span className="member-name">Gael Mendoza-Mazquitic</span>
              <span className="member-role">Team Lead</span>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}vincent.png`} alt="Vincent Nguyen" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Vincent Nguyen</span>
                <span className="member-role">Project Manager</span>
              </div>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}dishant.png`} alt="Dishant Bhagwakar" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Dishant Bhagwakar</span>
              </div>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}parmeet.png`} alt="Parmeet Singh" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Parmeet Singh</span>
              </div>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}lisette.png`} alt="Lisette Meza" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Lisette Meza</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="info-card">
          <h3>Software Team</h3>
          <ul className="team-members-list">
            <li className="team-member-lead member-with-pic">
              <img src={`${import.meta.env.BASE_URL}chris.png`} alt="Chris Nguyen" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Chris Nguyen</span>
                <span className="member-role">Team Lead</span>
              </div>
            </li>
            <li className="member-with-pic">
              <img src={`${import.meta.env.BASE_URL}jaideep.png`} alt="Jaideep Deevi" className="member-pic" />
              <div className="member-info">
                <span className="member-name">Jaideep Deevi</span>
              </div>
            </li>
            <li><span className="member-name">Danijela Cavic</span></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
