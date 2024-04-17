import React from "react";
import aboutImg from "../../assets/images/doctor-img02.jpg";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* ------------ABOUT IMG----------------*/}

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="relative w-3/4 lg:w-1/2 xl:w-1/3 z-10 order-2 lg:order-1 "
          >
            <img src={aboutImg} alt="" className="rounded-[20px]" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ------------ABOUT content----------------*/}

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order:2"
          >
            <h2 className="heading">Proud to be the one of the nation best</h2>
            <p className="tex_para mt-[10px]">
              Our platform connects patients with expert doctors spanning
              various specialties, ensuring comprehensive healthcare access.
            </p>
            <p className="text_para mt-[20px] ">
              With a diverse range of practitioners, from general physicians to
              specialized surgeons, we prioritize your well-being.
            </p>
            <p className="text_para mt-[30px]">
              our services guarantee top-notch care, streamlined appointments,
              and efficient time management.
            </p>

            <button className="btn bg-greencolor text-blackColor text-[16px] leading-5 font-[500] hover:bg-lightgreencolor text-whiteColor transition-all duration-300 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
