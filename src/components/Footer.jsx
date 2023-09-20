import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-56 bg-accent-pink flex justify-around xl:px-6 mx-auto bottom-0 mt-10 ">
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
      <div className="flex flex-col justify-center text-black">
        <h3 className="text-black">+123 45 67 89</h3>
        <h4 className="text-black">Strada Mihail Kogalniceanu</h4>
        <h4 className="text-black">Brasov, Romania</h4>
      </div>
    </div>
  );
};

export default Footer;
