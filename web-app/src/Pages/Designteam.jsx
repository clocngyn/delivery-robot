import '../App.css'

function Designteam() {
  return (
    <>
      {/* Page Title */}
      <h1>Design Team</h1>

      {/* Overview Box */}
      <section className="DesignOverview">
        <div className='RobotBoxes'>
          <h3>Overview</h3>
          <p>The design team defines the robot body layout...</p>
        </div>
      </section>

      {/* 3D Models */}
      <section className='DesignModels'>
        <h2>3D Models</h2>
        <div className='DesignModelGrid'>

          {/* Model 1 */}
          <div className='RobotBoxes'>
            <h3>Chassis</h3>
            <iframe
              className="DesignFrame"
              src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028117dcccc210c6c48dd?mode=embed"
              allowFullScreen
            />
          </div>

          {/* Model 2 */}
          <div className='RobotBoxes'>
            <h3>Suspension</h3>
            <iframe
              className="DesignFrame"
               src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028117dcccc210c6c48dd?mode=embed"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default Designteam