import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import {doctors} from './../../assets/data/doctors';

const Doctors = () => {
  return (
    <>
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full fous:outline-none cursor-pointer placeholder:textColor" placeholder="Search Doctor" />
          <button className="btn mt-0 rounded-[0px]rounded-r-md">Search</button>
        </div>
      </div>
    </section>

    <section >
      <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor}/>
        ))}
      </div>
      </div>
    </section>

    <section>
      <div  data-aos='' data-aos-duration="600"className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Word from our patients</h2>
          <p className='text_para text-center p-[10px]'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>
        <Testimonial/>
      </div>
    </section>
    </>
  );
};

export default Doctors;
