import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/img/1.jpg";

const ProjectCardLeft = () => {
  return (
    <div className="flex space-x-12 w-full justify-between py-8 bg-back-accent px-8 rounded-2xl">
      <div className="w-1/2 flex flex-col items-start space-y-10">
        <h3 className="text-4xl text-yellow-header-dark -translate-y-4">
          Project One
        </h3>
        <h4 className="text-3xl text-yellow-header-dark2 -translate-y-6">
          Brasov, Romania
        </h4>
        <p className="text-yellow-header-dark text-base leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          totam enim, nisi, perferendis eum eaque sint voluptatibus fuga
          veritatis ea esse facilis unde laboriosam sapiente. Reprehenderit amet
          nulla mollitia repudiandae. Illo dolorum officiis natus ipsam, quod
          vel id eveniet possimus minus minima tenetur qui delectus magnam,
          impedit saepe cumque nam sit aspernatur ab, sapiente animi dolor. Sed
          consequuntur dicta aspernatur. Facilis atque quis beatae, voluptatum
          aliquid ea repellat, laborum dolore maxime, aliquam nisi tempora
          laboriosam animi blanditiis qui temporibus quasi saepe quidem corporis
          totam ratione ducimus consequatur? Deserunt, corrupti unde.
        </p>
        <button className="group bg-yellow-button w-44 h-16 rounded-md hover:bg-blue-500 text-white hover:text-black duration-500 flex items-center justify-evenly hover:w-60 ">
          <p className="text-xl group-hover:justify-self-start text-back-accent">
            Hit me
          </p>
          <FontAwesomeIcon
            icon={faGreaterThan}
            className="group-hover:translate-x-4 group-hover:scale-150 duration-300"
          ></FontAwesomeIcon>
        </button>
      </div>

      <img
        src={img1}
        alt=""
        className="object-cover aspect-auto h-[400px] w-1/2 rounded-xl"
      />
    </div>
  );
};

export default ProjectCardLeft;
