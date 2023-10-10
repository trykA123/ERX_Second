import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="w-screen h-48 bg-gold-200 flex justify-between mx-auto items-center px-10 mt-64 absolute bot-0">
      <div className="flex flex-col space-y-2 px-24">
        <a href="/" className="">
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
      <div className="flex flex-col text-black space-y-3 w-[420px] px-3">
        <span className="flex items-center  space-x-8">
          <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
          <h4 className="text-black">+123 45 67 89</h4>
        </span>
        <span className="flex items-center  space-x-8">
          <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
          <h4 className="text-black">Mihail Kogalniceanu, Brasov</h4>
        </span>
        <span className="flex items-center space-x-8">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          <h4 className="text-black">office@office.com</h4>
        </span>
      </div>
    </div>
  );
};

export default Footer;
