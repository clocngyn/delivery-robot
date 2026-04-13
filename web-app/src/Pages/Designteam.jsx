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
          <p>The design team defines the robot’s body layout by creating the physical structure and developing a stable, 
            cooler-sized chassis. This is done through SolidWorks modeling, material selection, and 3D printing with PETG and PLA. 
            During this process they prototype and build the frame to ensure durability, balance, and smooth mobility while also designing the payload system, 
            electronics housing, and all structural components required for safe operation. Their work additionally includes implementing advanced mechanical features 
            such as suspension, modular attachments, and a magnetic lid‑locking mechanism.</p>
        </div>
      </section>

      {/* 3D Models */}
      <section className='DesignModels'>
        <h2>3D Models</h2>
        <div className='DesignModelGrid'>

          {/* Model 1 */}
          <div className='DesignCard'>
            <h3>Body</h3>
             {/* Embeded file from fusion */}
            <iframe
              className="DesignFrame"
             src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028117dcccc210c6c48dd?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"
            />
          </div>

          {/* Model 2 */}
          <div className='DesignCard'>
            <h3>Chasis + Suspension</h3>
            <iframe
              className="DesignFrame"
              src="https://mycsu770.autodesk360.com/shares/public/SH90d2dQT28d5b6028110ddcc53b9dd688cd?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default Designteam