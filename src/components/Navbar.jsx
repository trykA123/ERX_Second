import { motion } from "framer-motion";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const ulContainer = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 0.5,
      },
    },
  };
  const liItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const logoItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, duration: 0.5, delay: 1.2 }, // Adjust the delay as needed
  };
  return (
    <motion.div
      className="mx-auto xl:flex xl:flex-row xl:justify-between xl:w-full xl:h-32 xl:py-12 xl:items-center xl:sticky xl:top-0 z-50 text-gold-900 w-screen border-b-2 border-gold-900 border-opacity-25 bg-gold-200 xl:px-80"
      variants={ulContainer}
      initial="hidden"
      animate="show"
    >
      <motion.a href="/" className="" variants={logoItem}>
        <img src={logo} alt="logo" />
      </motion.a>
      <ul className="flex flex-row justify-between w-[420px]">
        <motion.li className="group w-20 text-center" variants={liItem}>
          <a href="/services">Services</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-gold-900 rounded-sm duration-300"></div>
        </motion.li>
        <motion.li className="group w-20 text-center" variants={liItem}>
          <a href="/about">About</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-gold-900 rounded-sm duration-300"></div>
        </motion.li>
        <motion.li className="group w-20 text-center" variants={liItem}>
          <a href="/projects">Projects</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-gold-900 rounded-sm duration-300"></div>
        </motion.li>
        <motion.li className="group w-20 text-center" variants={liItem}>
          <a href="/contact">Contact</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-gold-900 rounded-sm duration-300"></div>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
