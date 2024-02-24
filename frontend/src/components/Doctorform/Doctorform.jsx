import React from 'react';
import { Link } from 'react-router-dom';

const Doctorform = () => {
  return (
    <section className='container mx-auto h-16 md:h-40 bg-textColor my-10 rounded-[10px] px-6 md:max-w-[500px] shadow-lg -translate-y-30 md:-translate-y-6 -my-20 md:p-6 flex items-center justify-between'>
      <h1 className='text-whiteColor text-lg md:text-xl font-bold mr-2'>Become a health partner</h1>
      <Link to='/doctorfillup'>
        <button className='bg-greencolor py-2 px-6 text-white font-semibold h-[44px] rounded-[50px] hover:bg-lightgreencolor hover:text-black transition-all duration-300'>Apply Now</button>
      </Link>
    </section>
  );
};

export default Doctorform;
