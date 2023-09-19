import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto h-full">
      <div className="xl:py-36 flex flex-col space-y-16">
        <h2 className="text-8xl">Projects</h2>
        <p className="text-xl w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
          nostrum quo officiis, rem, veritatis pariatur repellendus at cum
          labore ea nobis sint earum et minus! Quaerat beatae molestias
          exercitationem.
        </p>
      </div>
      <div className="grid grid-rows-2 gap-24 w-full">
        <div className="flex w-full space-x-8 ">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex w-full space-x-8 ">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex w-full space-x-8 ">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
