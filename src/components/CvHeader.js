import photo from '../assets/profile_picture.jpg'
import {FaLinkedinIn, FaGithub, FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function CvHeader() {
  return (
    <div className="cv-header">
      <div className="cv-header-text-container">
        <div className="cv-row">
          <div className="name">
            Romaric GUTH
          </div>
          <div className="contact-container">
            <div className="contact">
              <FaLinkedinIn className="cv-icon" /> <a href="https://www.linkedin.com/in/guth">guth</a><br/>
              <FaGithub className="cv-icon" /> <a href="https://github.com/RomaricGuth">RomaricGuth</a><br/>
            </div>
            <div className="contact">
              <FaPhone className="cv-icon" /> XX XX XX XX XX <br/>
              <MdEmail className="cv-icon" />ro.guth@free.fr <br/>
            </div>
          </div>
        </div>
        <div className="title">
          Embedded Software Engineer
        </div>
      </div>
      <div className="photo">
        <img src={photo} className="photo" />
      </div>
    </div>
  )
}

export default CvHeader;
