import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Project = ({ projectId, projectDescription, imageGallery }) => {
  const {id} = useParams()
  const galleryContainer = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <h2>Project {id} {projectId} details</h2>
        <p>{projectDescription}</p>
      </div>
      <motion.div
        className="grid grid-cols-3 gap-4"
        variants={galleryContainer}
        initial="hidden"
        animate="show"
      >
        {imageGallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index}`}
            className="w-60 h-60 object-cover rounded-lg hover:scale-125 duration-300"
          />
        ))}
      </motion.div>
      {/* Add more content as needed */}
    </div>
  );
};

Project.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  imageGallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
