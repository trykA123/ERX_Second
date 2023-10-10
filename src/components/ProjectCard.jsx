import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import test from "../assets/img/hero.webp";

const ProjectCard = ({ projectLink, projectId }) => {
  return (
    <div className="relative flex w-3/4 h-[400px] rounded-3xl items-end justify-center group duration-700 hover:w-full cursor-pointer">
      <Link
        to={projectLink}
        className="overflow-hidden w-full h-full rounded-3xl"
      >
        <img
          src={test}
          alt=""
          className="group-hover:scale-125 duration-300 grayscale group-hover:grayscale-0 object-cover h-full"
        />
      </Link>
      <h3 className="text-white absolute text-3xl w-full rounded-b-3xl opacity-100 group-hover:opacity-0 duration-300 px-4 py-12">
        Project {projectId}
      </h3>
    </div>
  );
};

ProjectCard.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectCard;
