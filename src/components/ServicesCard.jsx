import React from "react";
import test from "../assets/img/test.jpg";

const ServicesCard = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-4 px-4 group relative py-12 ">
      <div className="overflow-hidden w-full h-full space-y-4 bg-slate-200 rounded-lg">
        <img
          src={test}
          alt=""
          className="group-hover:scale-110 ease-in-out duration-300"
        />
        <div className="flex flex-col items-start justify-center space-y-4 p-4">
          <h4 className="text-3xl">Table</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            iste non aliquam necessitatibus tempore, fugit voluptate pariatur
            iusto in culpa! Iusto animi voluptatibus illo nulla id consequatur
            accusamus recusandae quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
