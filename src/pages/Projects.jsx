import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectData = [
    { id: "1", projectId: "1" },
    { id: "2", projectId: "2" },
    { id: "3", projectId: "3" },
    { id: "4", projectId: "4" },
    { id: "5", projectId: "asdasdasdass" },
    { id: "6", projectId: "6" },
    { id: "7", projectId: "7" },
    // { id: "8", projectId: "8" },
    // Add more project data as needed
  ];

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
      <div className="grid grid-cols-4 gap-24 w-full py-24">
        {projectData.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard projectId={project.projectId} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="flex w-full space-x-8">
          <ProjectCard projectLink="/projects/5" projectId="5" />
          <ProjectCard projectLink="/projects/6" projectId="6" />
          <ProjectCard projectLink="/projects/7" projectId="7" />
          <ProjectCard projectLink="/projects/8" projectId="8" />
        </div> */
}
