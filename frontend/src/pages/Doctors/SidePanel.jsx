import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md w-[350px]'>
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold '>Ticket Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>Rs. 200</span>
      </div>
      <div className='mt-[30px]'>
          <p className='text_para mt-0 font-semibold text-headingColor'>Avaiable time slots:</p>

          <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor'>Sunday</p>
              <p className='text-[15px] leading-6 text-textColor'>4:00 PM - 9:00 PM</p>
            </li>

            <li className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor'>Wednesday</p>
              <p className='text-[15px] leading-6 text-textColor'>2:00 PM - 4:00 PM</p>
            </li>

            <li className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor'>Friday</p>
              <p className='text-[15px] leading-6 text-textColor'>11:00 AM - 2:00 PM</p>
            </li>
          </ul>
      </div>
      <button className='btn px-2 w-full rounded-md bg-greencolor'>Book appointment</button>
    </div>
  )
}

export default SidePanel;
