import React, {useState} from "react";
import "../../styles/Footer.scss";
import { faMapMarker, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = () => {
    setSubscribed(true);
  };
  return (
    <div className="main-footer">
      <div className="main-footer-container">
        <div className="main-footer-content">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="animated-text">Rama Store</h2>
              <p className="animated-text">We are providing high quality services with 100% satisfaction guarantee.</p>

            </div>
            <div className="col-lg-4">
              <h2>Contact us</h2>
              <h5>
                <FontAwesomeIcon icon={faMapMarker} className="footer-icons" />
                Empire Road, Somewhere , on Earth
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPhone} className="footer-icons" />{" "}
                +2111 555 555 54
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="footer-icons" />{" "}
                info@claymastore.com
              </h5>
              <h5>
                <FontAwesomeIcon icon={faGlobe} className="footer-icons" />{" "}
                www.claymastore.com
              </h5>
            </div>
            <div className="col-lg-4">
              <h2>Subscribe</h2>
              {subscribed ? (
                <p>We will send you our new collections!</p>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                  <button type="submit" className="btn btn-danger" onClick={handleClick}>Subscribe</button>
                </form>
              )}
            </div>

          </div>
        </div>
        <div className="main-footer-copyright">
          <p>Copyright &copy; {new Date().getFullYear()} Rama Store</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
