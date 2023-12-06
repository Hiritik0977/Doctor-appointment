import React from 'react';
import CountUp from "react-countup";

const Overview = () => {
  return (
    <section className='container h-12 md:h-32'>
        <div className='grid grid-cols-4 divide-x divide-slate-700 mx-auto  rounded-[10px] w-full mx-10 px-20 md:max-w-[800px] shadow-lg -translate-y-30 md:-translate-y-6 my-4 md:p-8'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-textColor dark:text-white sm:text-lg md:text-3xl'>
                    <CountUp end={10000} suffix='+' duration={5.75}/>
                    </h1>
                    <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
            </div  >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-textColor dark:text-white sm:text-lg md:text-3xl'>
                    <CountUp end={1500} suffix='+' duration={5.75}/>
                    </h1>
                <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
            </div  >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-textColor dark:text-white sm:text-lg md:text-3xl'>
                    <CountUp end={800} suffix='+' duration={5.75}/>
                    </h1>
                    <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
            </div  >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-textColor dark:text-white sm:text-lg md:text-3xl'>
                    <CountUp end={900} suffix='+' duration={5.75}/>
                    </h1>
                    <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
            </div  >
           

        </div>

    </section>
  );
};

export default Overview;
