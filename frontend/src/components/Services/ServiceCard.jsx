import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({item, index}) => {


    const {name, desc, price, bgColor, textColor} = item

  return (
    <div className='py-[30px] px-3 lg:px-5'>
        <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
        <p className='text-[14px] leading-7 font-[500] mt-4 text-whiteColor bg-greencolor w-[110px] rounded-[20px] p-[4px] px-4  '>Price: $ {price}</p>

     <div className='flex item-center justify-between mt-[30px]'>
     <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] 
              flex items-center justify-center group hover:bg-greencolor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>

    <span 
      className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]' 
      style={{
        background:`${bgColor}`, 
        color:`${textColor}`, 
        borderRadius:'6px 0 0 6px',
      }}
    >
        {index + 1}
    </span>
     </div>

    </div>
  );
};

export default ServiceCard;
