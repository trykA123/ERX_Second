import img2 from "../assets/img/2.jpg";

const ProjectCard = () => {
  return (
    <div className="flex space-x-12 w-full justify-between py-12">
      <img
        src={img2}
        alt=""
        className="object-cover aspect-auto h-[400px] w-1/2"
      />
      <div className="w-1/2 flex flex-col space-y-6">
        <h3 className="text-4xl">Project Two</h3>
        <h4 className="text-3xl text-green-700">Bla bla</h4>
        <p>
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
      </div>
    </div>
  );
};

export default ProjectCard;
