import React from "react";
import { useParams } from "react-router-dom";
import Project from "../components/Project";

const ProjectPage = () => {
  const { projectId } = useParams();

  // Fetch project data based on the projectId
  const projectData = {
    1: {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageGallery: [
        /* Image URLs for project 1 */
      ],
    },
    2: {
      description: "Description for project 2",
      imageGallery: [
        /* Image URLs for project 2 */
      ],
    },
    // Add more project data as needed
  };

  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto h-full xl:py-36">
      <Project
        projectId={projectId}
        projectDescription={project.description}
        imageGallery={project.imageGallery}
      />
    </div>
  );
};

export default ProjectPage;
