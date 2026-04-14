import '../App.css'

function Photos() {
  return (
    <div className="PhotosPage">
      <h1>Photos</h1>

      <div className="PhotosGrid">

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image1.JPG`}/>
          <figcaption>First Project Meeting</figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image2.JPG`}/>
          <figcaption> All teams collaborating on design</figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image3.JPG`}/>
          <figcaption>Hardware figuring out schematics </figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image4.JPG`}/>
          <figcaption>First round of soldering </figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image5.JPG`}/>
          <figcaption>Hardware team discussion</figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image6.JPG`}/>
          <figcaption>Design and Hardware making sure everything aligns </figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image7.JPG`}/>
          <figcaption>Second 3D printer getting set up </figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image8.JPG`}/>
          <figcaption>Teaching other people on the team how the 3D printing works</figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image9.JPG`}/>
          <figcaption>Explaining wiring to design </figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image14.JPG`}/>
          <figcaption>Deliberations</figcaption>
        </figure>

        <figure>
          <img src={`${import.meta.env.BASE_URL}Image17.JPG
          `}/>
          <figcaption>Finalizing hardware interfaces</figcaption>
        </figure>

       <figure>
          <img src={`${import.meta.env.BASE_URL}Image18.JPG`}/>
          <figcaption>Hardware lead explaining their parts to other teams  </figcaption>
        </figure>

      </div>
    </div>
  )
}

export default Photos