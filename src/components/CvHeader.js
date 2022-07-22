import photo from '../assets/profile_picture.jpg'
import {FaLinkedinIn, FaGithub, FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useContext} from "react";
import {CvOptionsContext} from "../utils/CvOptionsContext";

function CvHeader() {
  const {options} = useContext(CvOptionsContext);

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
              <FaPhone className="cv-icon" /> {options.phone ? options.phone : "hidden"}<br/>
              <MdEmail className="cv-icon" /> {options.email ? options.email : "hidden"}<br/>
            </div>
          </div>
        </div>
        <div className="title">
          {options.position}
        </div>
      </div>
      <div className="photo">
        <img src={photo} className="photo" alt="profile picture" />
      </div>
    </div>
  )
}

export default CvHeader;
