import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
class Social extends Component {
  render() {
    return (
      <div className="social">
        {/* <a href="https://codepen.io/naafi" target="_blank"><i class="fab fa-codepen"></i></a> */}
        <a href="https://github.com/Inspiration-Prerana" target="_blank">
          <FontAwesomeIcon className="icons" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/pre_ra_na/" target="_blank">
        <FontAwesomeIcon className="icons" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/abdul.w.naafi" target="_blank">
        <FontAwesomeIcon className="icons" icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/preranabajracharya" target="_blank">
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </a>
        {/* <a href="https://medium.com/@iam_naafi" target="_blank"><i class="fab fa-medium-m"></i></a> */}
      </div>
    );
  }
}
export default Social;
