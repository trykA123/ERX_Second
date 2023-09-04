import test from "../assets/img/test.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCardLeft from "../components/ProjectCardLeft";
import ProjectCardRight from "../components/ProjectCardRight";
const Work = () => {
  return (
    <div className="xl:flex xl:flex-col container mx-auto">
      <Navbar />
      <div className="xl:px-24 xl:py-36">
        <h2 className="text-5xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vel
          eveniet incidunt harum ad ipsa quos accusantium! Minima enim earum
          totam, dolorem rem omnis dicta minus facere a at! Atque?
        </h2>
      </div>
      <div className="xl:py-12">
        <img src={test} alt="" className="object-cover h-[600px] w-full" />
      </div>
      <div className="xl:px-24 xl:flex xl:flex-col xl:py-24">
        {/* <h2 className="text-4xl">Recent Work</h2>
        <p className="xl:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel.
          Eveniet dignissimos deleniti, tenetur deserunt quos, velit sit facilis
          qui natus, esse veniam consectetur. Earum recusandae officiis quis ad
          consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur, ea tempore ducimus aperiam eius quas at sit aspernatur
          doloribus fugiat minus? Odit adipisci, dolore quibusdam esse error
          laudantium necessitatibus assumenda?
        </p> */}
        <ProjectCardLeft />
        <ProjectCardRight />
        <ProjectCardLeft />
        <ProjectCardRight />
      </div>
      <Footer />
    </div>
  );
};

export default Work;
