import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto xl:flex xl:flex-row xl:justify-between xl:w-full xl:h-24 xl:px-6 xl:py-12 bg-white xl:items-center xl:sticky xl:top-0 z-50">
      <a href="/" className="">
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex flex-row justify-between w-[420px]">
        <li className="group w-20 text-center">
          <a href="/services">Services</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-yellow-300 rounded-sm duration-300"></div>
        </li>
        <li className="group w-20 text-center">
          <a href="/about">About</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-yellow-300 rounded-sm duration-300"></div>
        </li>
        <li className="group w-20 text-center">
          <a href="/projects">Projects</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-yellow-300 rounded-sm duration-300"></div>
        </li>
        <li className="group w-20 text-center">
          <a href="/contact">Contact</a>
          <div className="w-0 group-hover:w-full h-[2px] bg-yellow-300 rounded-sm duration-300"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
