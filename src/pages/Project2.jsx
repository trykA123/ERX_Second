import {
  default as img1,
  default as img4,
  default as img7,
} from "../assets/img/1.jpg";
import {
  default as img2,
  default as img5,
  default as img8,
} from "../assets/img/2.jpg";
import {
  default as img3,
  default as img6,
  default as img9,
} from "../assets/img/2.webp";

import Project from "../components/Project";

const Project2 = () => {
  const projectId = "2";
  const projectDescription = "De ce naiba nu mergi..";
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

export default Project2;
