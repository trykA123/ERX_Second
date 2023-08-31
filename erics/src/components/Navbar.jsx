import React from "react";

const Navbar = () => {
  return (
    <div className="xl:flex xl:flex-row xl:justify-between xl:w-full xl:h-24 xl:px-24 xl:py-12 bg-slate-300 xl:items-center xl:sticky xl:top-0">
      <div className="text-4xl">ESD</div>
      <ul className="flex flex-row justify-between w-[420px]">
        <li className="hover:bg-slate-600 duration-500 hover:text-white w-20 text-center">
          Work
        </li>
        <li className="hover:bg-slate-600 duration-500 hover:text-white w-20 text-center">
          About
        </li>
        <li className="hover:bg-slate-600 duration-500 hover:text-white w-20 text-center">
          Our Team
        </li>
        <li className="hover:bg-slate-600 duration-500 hover:text-white w-20 text-center">
          Projects
        </li>
        <li className="hover:bg-slate-600 duration-500 hover:text-white w-20 text-center">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
