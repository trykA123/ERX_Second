//import test from "../assets/img/test.jpg";

const ServicesCard = () => {
  return (
    <div className="w-full h-[35dvh] bg-servicesImg bg-cover rounded-lg flex relative items-end group">
      <div className="flex flex-col items-start justify-center space-y-4 p-4 group-hover:bg-gold-200 h-32 group-hover:h-full duration-700 rounded-lg w-full">
        <h4 className="text-3xl text-gold-800 group-hover:-translate-y-28 duration-300">
          Table
        </h4>
        <ul className="flex flex-col opacity-0 group-hover:opacity-100 duration-500 delay-700">
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
