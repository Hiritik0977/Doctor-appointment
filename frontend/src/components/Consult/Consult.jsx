import React from 'react';
import {Pagination} from  'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Consult = () => {
    return (
        <div 
         className='mt-[30px] lg:mt-[55px] '>
            
              <Swiper
                modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
                breakpoints={{
                
                    240:{
                    slidesPerView: 1,
                    spaceBetween: 0,
                },

                400:{
                        slidesPerView: 2,
                        spaceBetween: 10,
                },    
                640:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024:{
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
              }}
              >
                
                <SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Thypoid</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
       <Link to ='/cardio'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>

                
                <SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Fever</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to='/fever'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>


                

                
<SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Dengue</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to ='/dengue'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>

    
                
    
<SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Hepatitis</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to='/hepatitis'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>



<SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Pregancy</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to='/pregnancy'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Liver</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to ='/liver'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Urine test</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to ='/urine'> 
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>



                <SwiperSlide>
    <div className='py-[30px] px-5 rounded-3 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-[13px]'>
            <img src={patientAvatar} alt="" />
            <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Vitamins</h4>
            </div>
        </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services from them. </p>
        <Link to ='/vitamin'>
        <button className='btn bg-primaryColor text-white text-[14px] leading-1 font-[500] hover:bg-lightgreencolor  hover:text-black transition-all duration-300 px-5 py-2 mx-1 my-2'>Symptoms</button>
        </Link>
    </div>
</SwiperSlide>


               

              </Swiper> 
              </div>
              
        
      );
    };
export default Consult;
