import '../App.css'




function About() {
  return(
    <div className='AboutPage'>
      <h1>About the Team</h1>
      <p className='AboutText'>Meet the students behind the Food Delivery Robot.</p>
      {/* Design Team */}
      <section className='TeamSection'>
        <h2>Project Leads</h2>
        <div className='MemberGrid'>
          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Vincent.png`}
              className="MemberPhoto" />
              <h3>Vincent Nguyen</h3>
              <p>Project Manager</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>
            </div>
          </div>
          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Ted.png`}
            className="MemberPhoto" />
            <h3>Taehyung Um</h3>
            <p>Design Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>
          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Gael.png`}
            className="MemberPhoto" />
            <h3>Gael Mendoza-Mazquitic</h3>
            <p>Hardware Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>
        <div className="MemberCard">
          <img src={`${import.meta.env.BASE_URL}Chris.png`}
          className="MemberPhoto" />
          <h3>Chris Nguyen</h3>
          <p>Software Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
        </div>
        </div>
      </section>
      {/* Design Team */}
      <section className='TeamSection'>
        <h2>Design Team</h2>
        <div className='MemberGrid'>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Ted.png`}
            className="MemberPhoto" />
            <h3>Taehyung Um</h3>
            <p>Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}robot-temp.svg`}
            className="MemberPhoto" />
            <h3>Alia Shaqur</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Khaku.png`}
            className="MemberPhoto" />
            <h3>Khaku Purev-Erdene</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}robot-temp.svg`}
            className="MemberPhoto" />
            <h3>Natalee Ibarra</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>
           
          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Billy.png`}
            className="MemberPhoto" />
            <h3>Billy Cam</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Hunter.png`}
            className="MemberPhoto" />
            <h3>Hunter Nguyen</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}robot-temp.svg`}
            className="MemberPhoto" />
            <h3>Danijela Cavic</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>
        </div>
      </section>
{/* Hardware Team */}
      <section className='TeamSection'>
        <h2>Hardware Team</h2>
        <div className='MemberGrid'>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Gael.png`}
            className="MemberPhoto" />
            <h3>Gael Mendoza-Mazquitic</h3>
            <p>Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Vincent.png`}
              className="MemberPhoto" />
              <h3>Vincent Nguyen</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Lisette.png`}
            className="MemberPhoto" />
            <h3>Lisette Meza</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>




          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Dishant.png`}
            className="MemberPhoto" />
            <h3>Dishant Bhagwakar</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>
             
          <div className="MemberCard">
            <img src={`${import.meta.env.BASE_URL}Parmeet.png`}
            className="MemberPhoto" />
            <h3>Parmeet Singh</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
          </div>      
        </div>
      </section>




  {/* Software Team */}
      <section className='TeamSection'>
        <h2>Software Team</h2>
        <div className='MemberGrid'>




        <div className="MemberCard">
          <img src={`${import.meta.env.BASE_URL}Chris.png`}
          className="MemberPhoto" />
          <h3>Chris Nguyen</h3>
          <p>Team Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
        </div>




        <div className="MemberCard">
          <img src={`${import.meta.env.BASE_URL}Jaideep.png`}
          className="MemberPhoto" />
          <h3>Jaideep Deevi</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/danijela-cavic-052b8b328/"
                 target="_blank"
                rel="noopener noreferrer"
                >
                    View Profile
                </a>            </div>
        </div>
      </div>
      </section>
    </div>
  )
}




export default About



