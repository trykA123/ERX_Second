import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Contact = () => {
  const center = useMemo(() => ({ lat: 45.65126, lng: 25.60828 }), []);

  return (
    <div id="contact" className="container mx-auto h-full">
      <div className="xl:py-20 px-4">
        <div className="w-full h-[800px] mx-auto rounded-2xl shadow-2xl flex flex-row overflow-hidden justify-between">
          <div className="basis-7/12 flex flex-col py-24 px-24 space-y-12 justify-between">
            <div className="flex flex-col space-y-12">
              <h2>Contact us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                dolore mollitia accusamus facilis possimus.
              </p>
            </div>
            <form action="submit" className="flex flex-col space-y-24 w-2/3">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 outline-none focus:border-gold-6002"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 outline-none focus:border-gold-600"
              />
              <textarea
                placeholder="Message"
                className="border-b-2 outline-none focus:border-gold-600 flex-grow"
              />
              <button className="bg-red-300 rounded-2xl hover:animate-pulse">
                Send email
              </button>
            </form>
          </div>
          <div className="duration-300 basis-1/12 bg-slate-300 flex flex-col items-center justify-end relative">
            <motion.div
              className="w-[800px] absolute bottom-[10%] h-4/5 rounded-l-lg shadow-md flex flex-col justify-around overflow-hidden"
              initial={{ opacity: 0, x: 800 }}
              animate={{ opacity: 1, x: -200 }}
              transition={{ duration: 1.5 }}
            >
              {/* <h2>Contact Info</h2>
              <div className="flex flex-col justify-evenly space-y-6">
                <span className="flex items-center space-x-8">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                  <p className="text-black">+123 45 67 89</p>
                </span>
                <span className="flex items-center space-x-8">
                  <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
                  <p className="text-black">Mihail Kogalniceanu, Brasov</p>
                </span>
                <span className="flex items-center space-x-8">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                  <p className="text-black">office@office.com</p>
                </span>
              </div> */}
              <LoadScript googleMapsApiKey={import.meta.VITE_GOOGLE_APY_KEY}>
                <GoogleMap
                  zoom={16}
                  center={center}
                  mapContainerClassName="w-full h-full"
                >
                  <Marker position={center} />
                </GoogleMap>{" "}
              </LoadScript>
            </motion.div>
            <ul className="flex space-x-4 justify-self-end px-6 py-2">
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-7 h-7 hover:scale-125 duration-300"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-7 h-7 hover:scale-125 duration-300"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
