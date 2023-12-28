import React from 'react'

const Doctorform = () => {
  return (
    <section className='container h-12 md:h-32 bg-Color my-10'>
        <div className='grid grid-cols-2 divide-x bg-textColor divide-slate-900 mx-auto rounded-[10px] w-full mx-10 px-20 md:max-w-[800px] shadow-lg -translate-y-30 md:-translate-y-6 -my-20 md:p-10'>
            <div className='flex flex-col items-center justify-center'>
                
                    <h1 className='sm:text-md text-xs md:text-lg text-whiteColor font-[700] '>Become a health partner</h1>
                    <button className='btn bg-greencolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-4 '>Apply Now</button>
            </div  >
            <div className='flex flex-col items-center justify-center'>
                
                <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
            </div  >
            
           

        </div>

    </section>
  )
}

export default Doctorform;
