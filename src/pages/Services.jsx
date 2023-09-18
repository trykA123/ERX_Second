//import React from "react";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <div id="work" className="container mx-auto h-full">
      <div className="xl:py-36 "></div>
      <div className="xl:py-12 grid grid-cols-3 content-center">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
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
