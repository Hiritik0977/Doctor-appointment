import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading text-center " style={{ fontSize: "32px" }}>
          Services we provide
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          All the services we provide you is moniotred by highly trained medical
          expertise.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
