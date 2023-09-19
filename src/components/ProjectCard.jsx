import React from "react";
import test from "../assets/img/1.jpg";

const ProjectCard = () => {
  return (
    <div className="relative flex w-1/2 h-96 rounded-3xl items-end justify-center group duration-700 hover:w-full">
      <div className="overflow-hidden w-full h-full rounded-3xl">
        <img src={test} alt="" className="group-hover:scale-110 duration-300" />
      </div>
      <h3 className="absolute text-black text-3xl w-full h-32 bg-slate-300 rounded-b-3xl opacity-0 group-hover:opacity-100 duration-300">
        Saloot
      </h3>
    </div>
  );
};

export default ProjectCard;
