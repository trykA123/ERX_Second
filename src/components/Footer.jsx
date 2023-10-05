import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-48 bg-gold-200 flex justify-around xl:px-6 mx-auto bottom-0 mt-10 ">
      <div className="flex flex-col space-y-2">
        <a href="" className="">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex items-center px-16 space-x-4">
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-8 h-8 hover:animate-icon-bounce"
            />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center text-black space-y-2">
        <span className="flex items-center text-2xl space-x-8">
          <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />

          <h4 className="text-black">+123 45 67 89</h4>
        </span>
        <span className="flex items-center text-2xl space-x-8">
          <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />

          <h4 className="text-black">Mihail Kogalniceanu</h4>
        </span>
        <span className="flex items-center text-2xl space-x-8">
          <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />

          <h4 className="text-black">Brasov, Romania</h4>
        </span>
      </div>
    </div>
  );
};

export default Footer;
