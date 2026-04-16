import '../App.css'

function Designteam() {
  return (
    <div className='RobotWebInfo'> {/* Keeps layout centered like Home/About */}
      {/* Page Title */}
      <h1>Design Team</h1>

      {/* Overview Box */}
      <section className="DesignOverview">
        <div className='RobotBoxes'>
          <h3>Overview</h3>
          <p>The design team develops the robot’s physical structure and cooler‑sized chassis through SolidWorks modeling, material selection, and 3D‑printed PETG/PLA components. They prototype the frame for durability and mobility while designing the payload system, electronics housing, and structural elements, integrating suspension, modular attachments, and a magnetic lid-locking mechanism.</p>
        </div>
      </section>

      {/* 3D Models */}
      <section className='DesignModels'>
        <h2>3D Models</h2>
        <div className='DesignModelGrid'>

          {/* Model 1 */}
          <div className='DesignCard'>
            <h3> Modular Body</h3>
            <iframe
              className="DesignFrame"
              src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028117dcccc210c6c48dd?mode=embed"
              allowFullScreen
            />
          </div>

          {/* Model 2 */}
          <div className='DesignCard'>
            <h3> Chassis + Suspension</h3>
            <iframe
              className="DesignFrame"
              src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028110ddcc53b9dd688cd?mode=embed"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Designteam