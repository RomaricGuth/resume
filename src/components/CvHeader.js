import photo from '../assets/profile_picture.jpg'

function CvHeader() {
  return (
    <div className="cv-header">
      <div>
        <div className="name">
          Romaric GUTH
        </div>
        <div className="title">
          Embedded Software Engineer
        </div>
      </div>
      <div className="contact-container">
        <div className="contact">
          XX XX XX XX XX <br/>
          ro.guth@free.fr <br/>
          03/22/2000
        </div>
      </div>
      <div className="photo">
        <img src={photo} className="photo" />
      </div>
    </div>
  )
}

export default CvHeader;
