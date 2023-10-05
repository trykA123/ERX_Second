import test from "../assets/img/hero.webp";

const ProjectCard = () => {
  return (
    <div className="relative flex w-1/2 h-[400px] rounded-3xl items-end justify-center group duration-700 hover:w-full cursor-pointer">
      <a href="#" className="overflow-hidden w-full h-full rounded-3xl">
        <img
          src={test}
          alt=""
          className="group-hover:scale-125 duration-300 grayscale group-hover:grayscale-0 object-cover h-full"
        />
      </a>
      <h3 className="text-white absolute text-3xl w-full rounded-b-3xl opacity-100 group-hover:opacity-0 duration-300 px-4 py-12">
        Curtea de apel
      </h3>
    </div>
  );
};

export default ProjectCard;
