import React from 'react';
import {Pagination} from  'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';


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
                
                <SwiperSlide >
                    
                    <div className='py-[30px] px-5 rounded-3   '>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ujjwal
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-purpleColor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                    
                    
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abhik
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3 '>
                         <div className='flex items-center gap-[13px] '>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ankit
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>
    
                
    
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Subin
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Danish
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Samir
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Suyash
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                         <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ujjwal
                            </h4>
                            
                            </div>
        
                         </div>
        
                         <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken a medical services form them. </p>
                         <button className='btn bg-redcolor text-white text-[14px] leading-1 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300 p-2 mx-10 my-2'>Consult</button>

                    </div>
                </SwiperSlide>

               

              </Swiper> 
              </div>
              
        
      );
    };
export default Consult;
