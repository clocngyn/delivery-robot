import '../App.css'

function About() {
  return(
    <div className='AboutPage'>
      <h1>About the Team</h1>
      <p className='AboutText'>Meet the students behind the Food Delivery Robot.</p>

      {/* Team Leads */}
      <section className='TeamSection'>
        <h2>Project Leads</h2>
        <div className='MemberGrid'>
          
          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}vincent.png`}
              className="MemberPhoto" />
              <h3>Vincent Nguyen</h3>
              <p>Project Manager</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/vincent-nguyen-a92ab0387/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}ted.png`}
              className="MemberPhoto" />
              <h3>Taehyun Um</h3>
              <p>Design Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/taehyun-ted-um/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Gael.png`}
              className="MemberPhoto" />
              <h3>Gael Mendoza-Mezquitic</h3>
              <p>Hardware Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/gael-mendoza-mezquitc77/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}chris.png`}
              className="MemberPhoto" />
              <h3>Chris Nguyen</h3>
              <p>Software Lead</p>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/clocngyn/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className='TeamSection'>
        <h2>Design Team</h2>
        <div className='MemberGrid'>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}khaku.png`}
              className="MemberPhoto" />
              <h3>Khaku Purev-Erdene</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/khangerel-purev" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Alia.png`}
              className="MemberPhoto" />
              <h3>Alia Shaqur</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/alia-shaqur-116956389/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Nat.JPG`}
              className="MemberPhoto" />
              <h3>Natalee Ibarra</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/nataleei0116/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Billy.png`}
              className="MemberPhoto" />
              <h3>Billy Cam</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/billy-cam-53b640364/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
           
          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}hunter.png`}
              className="MemberPhoto" />
              <h3>Hunter Nguyen</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/hunter-nguyen-mm6/"
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}Dani.JPG`}
              className="MemberPhoto" />
              <h3>Danijela Cavic</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/danijela-cavic-052b8b328/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
        </div>
      </section>

{/* Hardware Team */}
      <section className='TeamSection'>
        <h2>Hardware Team</h2>
        <div className='MemberGrid'>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}lisette.png`}
              className="MemberPhoto" />
              <h3>Lisette Meza</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/lisette-meza-0265b51b3/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}dishant.png`}
              className="MemberPhoto" />
              <h3>Dishant Bhagwakar</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/dishant-bhagwakar-45390824a/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
             
          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}parmeet.png`}
              className="MemberPhoto" />
              <h3>Parmeet Singh</h3>
            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/parmeet-singh-2837803b5/" 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
          </div>
      </section>




  {/* Software Team */}
      <section className='TeamSection'>
        <h2>Software Team</h2>
        <div className='MemberGrid'>

          <div className="MemberCard">
              <img src={`${import.meta.env.BASE_URL}jaideep.png`}
              className="MemberPhoto" />
              <h3>Jaideep Deevi</h3>

            <div className="MemberInfoCard">
              <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/jaideep-deevi/..." 
          target="_blank" 
          rel="noopener">View Profile</a>
            </div>
          </div>
      </div>
      </section>
    </div>
  )
}




export default About



