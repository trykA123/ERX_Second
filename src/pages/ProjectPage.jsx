import {
  default as img1,
  default as img4,
  default as img7,
} from "../assets/img/1.jpg";
import {
  default as img3,
  default as img5,
  default as img8,
} from "../assets/img/1.webp";
import {
  default as img2,
  default as img6,
  default as img9,
} from "../assets/img/2.jpg";
import Project from "../components/Project";

const ProjectPage = () => {
  const projectId = "1";
  const projectDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";
  const imageGallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="container mx-auto h-full xl:py-36">
      <Project
        projectId={projectId}
        projectDescription={projectDescription}
        imageGallery={imageGallery}
      />
    </div>
  );
};

export default ProjectPage;
