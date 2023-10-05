import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import test1 from "../assets/img/1.jpg";
import test2 from "../assets/img/2.jpg";
import test3 from "../assets/img/dark.jpg";
import test from "../assets/img/test.jpg";

import ProjectCardLeft from "../components/ProjectCardLeft";
import ProjectCardRight from "../components/ProjectCardRight";
const Home = () => {
  return (
    <div className="xl:flex xl:flex-col">
      {/* <div className="xl:px-24 xl:py-36 container mx-auto">
        <h2 className="text-5xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vel
          eveniet incidunt harum ad ipsa quos accusantium! Minima enim earum
          totam, dolorem rem omnis dicta minus facere a at! Atque?
        </h2>
      </div> */}
      <Carousel
        className="xl:py-24 w-[80%] mx-auto"
        infiniteLoop
        autoPlay
        showThumbs={false}
        swipeable={true}
        interval={"5000"}
      >
        <img
          src={test}
          alt=""
          className=" object-cover h-[600px] w-full pointer-events-none"
        />
        <img
          src={test1}
          alt=""
          className=" object-cover h-[600px] w-full pointer-events-none"
        />
        <img
          src={test2}
          alt=""
          className=" object-cover h-[600px] w-full pointer-events-none"
        />
        <img
          src={test3}
          alt=""
          className=" object-cover h-[600px] w-full pointer-events-none"
        />
      </Carousel>

      <div className="xl:px-24 xl:flex xl:flex-col xl:py-24 container mx-auto space-y-12">
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
    </div>
  );
};

export default Home;
