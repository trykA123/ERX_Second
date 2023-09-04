import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-56 bg-slate-300 flex justify-between xl:px-8">
      <div className="flex flex-col space-y-2">
        <a href="" className="">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex items-center px-16 space-x-6">
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3>+40 749 37 00 85</h3>
        <h4>Strada Mihail Kogalniceanu</h4>
        <h4>Brasov, Romania</h4>
      </div>
    </div>
  );
};

export default Footer;
