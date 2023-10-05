//import React from "react";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <div id="services" className="container mx-auto h-full">
      <div className="xl:py-36 flex flex-col space-y-16 px-4">
        <h2 className="text-8xl">Services</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
          nostrum quo officiis, rem, veritatis pariatur repellendus at cum
          labore ea nobis sint earum et minus! Quaerat beatae molestias
          exercitationem.
        </p>
      </div>
      <div className="xl:py-12 grid grid-cols-2 content-center gap-8">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
