import React from 'react';
import Marquee from 'react-fast-marquee'
import { useEffect } from 'react';
import About from '../components/About/About'


import heroImg01 from '../assets/images/c-man.jpg';
import heroImg02 from '../assets/images/c-th.jpg';
import heroImg03 from '../assets/images/c-med.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/doctor-img02.jpg';
import faqImg from '../assets/images/doctor-img02.jpg';
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png';
import {Link} from 'react-router-dom';
import {BsArrowRight } from 'react-icons/bs';
import ServiceList from '../components/Services/ServiceList';
import Doctorlist from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';
import ent from '../assets/images/ent.png'
import cardiology from '../assets/images/cardiology.png';
import physiology from '../assets/images/physiology.png';
import psychiatrist from '../assets/images/psychiatrist.png';
import surgery from '../assets/images/surgune.png';
import radiology from '../assets/images/Radiology.png';
import neurology from '../assets/images/Neurology.png';
import urology from '../assets/images/urology.png';
import oncology from '../assets/images/oncology.png'
import AOS from 'aos';
import "aos/dist/aos.css";
import Overview from '../components/Overview/Overview';
import Consult from '../components/Consult/Consult';
import Doctorform from '../components/Doctorform/Doctorform';




const Home = () => {
  useEffect(() =>{
      AOS.init(
      {
        offset: 100,
        duration: 300,
        easing: "ease-in-sine",
        delay: 100
      });
      AOS.refresh();
  }, [])
  return (
  <>
   


     {/*-----------HERO ------------------ */}
 
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        {/*-----------HERO content------------------ */}
         <div>
          <div
          data-aos="fade-right" 
          data-aos-duration="500"
          data-aos-once="true"
          className='lg:w-[570px]'>
            
            <p className='p-[8px] w-[30%] rounded-[15px] bg-textColor text-whiteColor '>Close to you  ⚕️</p>

            
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]'>Let us heal your lives. </h1>
            <h2 className='font-[500] text-[20px] text-headingColor'>Here care comes first!!!</h2>
            <p className='text__para text-greencolor'>Our platform offers seamless appointment scheduling with a vast array of specialized doctors, catering to diverse medical needs. From general practitioners to specialists, our site ensures efficient healthcare access. Patients can easily browse profiles, book appointments, and receive quality care, empowering them to take control of their health journey..</p>

            <button className='btn bg-greencolor text-white text-[16px] leading-5 font-[500] hover:bg-whiteColor hover:text-black transition-all duration-300' >Consult Now</button>
          </div>
         


         {/*-----------HERO counter------------------

            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>0</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para text-whiteColor'>Years of experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>0</h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para text-whiteColor'>Clinic Location</p>
              </div>


              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>0</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text__para text-whiteColor'>Review</p>
              </div>

            </div>
 */}
      </div>
      
    
         {/*-----------HERO IMAGE------------------ */}

         <div
         data-aos="fade-left" 
         data-aos-duration="300"
         data-aos-once="true"
          className='flex gap-[30px] justify-center'>
            <div className='w-[100%] mt-[150px] ' >
              <img src={heroImg01} alt="" className='w-full rounded-lg m-4' />
            </div>
            <div className='w-[80%] mt-[50px]' >
              <img src={heroImg02} alt="" className='w-full rounded-lg m-4' />
            </div>
            <div className='w-[80%] mt-[-50px] mr-[10px]'>
              <img src={heroImg03} alt="" className='w-full rounded-lg m-2' />
            </div>
          </div>

    </div>
    </div>
    
  </section>


{/*-----------------OVERVIEW----------------------- */}


      <Overview/>



   {/*-----------HERO section end------------------ */}
     
     <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing you the best treatment
          </h2>
          <p className='text_para text-center p-[10px]'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          
          <div className='py-[30px] px-5'>
            <div data-aos="fade-up" data-aos-duration="500" className='flex items-center justify-center'> 
               <img src={icon01} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-greencolor font-[700] text-center '>Find a doctor</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>Navigate our user-friendly interface to easily find the perfect doctor. Filter by specialty, location, and availability for personalized care.
</p>
             
             <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-greencolor  hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>


          <div className='py-[30px] px-5'>
            <div data-aos="fade-up" data-aos-duration="500"  className='flex items-center justify-center'> 
               <img src={icon02} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-greencolor font-[700] text-center'>Find a Location</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>Discover nearby healthcare facilities like Civil Hospital near Shantinagar or renowned institutions like AIIMS Hospital in India for convenient access.
</p>
             
             <Link 
             to='/store' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-greencolor  hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>

          <div className='py-[30px] px-5'>
            <div data-aos="fade-up" data-aos-duration="500"  className='flex items-center justify-center'> 
               <img src={icon03} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-greencolor font-[700] text-center'>Book Appointment</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>Effortlessly book appointments with your preferred doctor on your chosen date using our user-friendly system for personalized care and convenience.</p>
             
             <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-greencolor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>

        </div>
      </div>
     </section>


     {/*--------------------UR WANT------------------------ */}



     <section>
      <div  data-aos="fade-up" data-aos-duration="600"className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Some of the common tests: </h2>
          <p className='text_para text-center p-[10px]'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>
        <Consult/>
      </div>


{/*------------------- Area of speciality -------------------*/}

      <div className='xl:w-[470px] mx-auto p-[50px]'>
          <h2 className='heading text-center'> Area of specialities</h2>
          
        </div>
      <Marquee speed={80} gradient pauseOnHover>
        
<div  className='image_wrapper'  style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
  <Link to ='/fever'>
    <img src={ent} className='w-[100px] h-[120px] rounded cursor-pointer' />
    <h4 className='m-[10px] font-[600]'>ENT</h4>
    </Link>
  </div>

  <div  className='image_wrapper'style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'} >
    <Link to ='/cardio'>
    <img src={cardiology} className='w-[100px] h-[120px] rounded cursor-pointer' />
    
    <h4 className='m-[10px] font-[600]'>Cardiology</h4>
    </Link>
  </div>

  <div  className='image_wrapper' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
    <img src={physiology} className='w-[100px] h-[120px] rounded cursor-pointer' />
    <h4 className='m-[10px] font-[600]'>Physiology</h4>
  </div>

  <div   className='image_wrapper' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
    <img src={psychiatrist} className='w-[100px] h-[120px] rounded cursor-pointer' />
    <h4 className='m-[10px] font-[600]'>Psychiatrist</h4>
  </div>

  <div  className='image_wrapper'style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'} >
    <img src={surgery} className='w-[100px] h-[120px] rounded cursor-pointer'  />
    <h4 className='m-[10px] font-[600] '>Surgery</h4>
  </div>

  <div  className='image_wrapper' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
    <img src={radiology} className='w-[100px] h-[120px] rounded cursor-pointer'  />
    <h4 className='m-[10px] font-[600]'>Radiology</h4>
  </div>

  <div  className='image_wrapper' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
    <img src={neurology} className='w-[100px] h-[120px] rounded cursor-pointer'  />
    <h4 className='m-[10px] font-[600]'>Neurology</h4>
  </div>

  <div  className='image_wrapper' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'}>
    <img src={urology} className='w-[100px] h-[120px] rounded cursor-pointer'  />
    <h4 className='m-[10px] font-[600]'>Urology</h4>
  </div>

  <div  className='image_wrapper ' style={{ transition: 'filter 0.3s ease-in-out' }}
        onMouseOver={(e) => e.target.style.filter = 'grayscale(100%)'}
        onMouseOut={(e) => e.target.style.filter = 'grayscale(0%)'} >
    <img src={oncology} className='w-[100px] h-[120px] rounded cursor-pointer'  />
    <h4 className='m-[10px] font-[600]'>Oncology</h4>
  </div>
  
  </Marquee>
    </section>




     {/*--------------------ABOUT ------------------------ */}

    
     <About/>


     
     
        

    


     <div data-aos="fade-up" data-aos-duration="600" className="flex p-[60px] ">
  <div className="container bg-creamcolor  ml-[20px] p-4 rounded-md mr-4 mt-10 ">
    <label  className='text-[26px] leading-6 text-headingColor font-[700] text-center' htmlFor="">We are known For:</label>
    <h1  className='font-[500] text-headingColor'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</h1>
  </div>
  
  <div className="container bg-creamcolor  ml-[20px] p-4 rounded-md mr-4 mt-10 ">
    <label  className='text-[26px] leading-9 text-headingColor font-[700] text-center' htmlFor="">Our Charity</label>
    <h1 className='font-[500] text-blackColor'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</h1>
  </div>

  </div>


    

    {/*------------------SERVICES---------------------*/ }
    <section>
      <div  data-aos="fade-up" data-aos-duration="600" className="container">
        <div  className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text_para text-center'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>

        <ServiceList/>
      </div>
    </section>



    {/*------------------FEATURES---------------------*/ }

    <section>
      <div className="container">
        <div className='flex items-center justify-between flex-col lg:flex-row'>

          {/*-----------------feature content---------------------*/ }
          <div data-aos="fade-up" data-aos-duration="300" className='xl:w-[670px]'>
            <h2 className='heading'>Get virtual treatment <br/>anytime.</h2>
            <ul className="pl-4">
              <li className="text_para p-[10px]">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para p-[10px] ">
                2. Search the physician here and contact directly.
              </li>
              <li className="text_para p-[10px]">
                3. View our physicians who are accepting new patients, use the online scheduling tool to select an appoitment time.
              </li>
            </ul>
            <Link to='/' ><button className='btn bg-greencolor hover:bg-lightgreencolor  transition-all duration-300'>Learn More</button></Link>
          </div>


             {/*-----------------feature image---------------------*/ }
             <div data-aos="fade-up" data-aos-duration="300" className='relative z-10 xl:w-[470px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4 rounded-[10px]' alt="" />
              <div className='w-[150px] h-[145px] lg:w-[200px] bg-white absolute bottom-[100px] left-0 md:bottom-[30px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

                <div className="flex items-center justify between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400] '>10:00</p>

                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ml-6'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 textirisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>Consulation</div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt="" />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[600] text-headingColor'>Roshan Gupta</h4>
                </div>

              </div>
             </div>

        </div>
      </div>
    </section>


    {/*-----------------Our doctors------------------------- */}
    <section>
      <div data-aos="fade-up" data-aos-duration="600" className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Great Doctors</h2>
          <p className='text_para text-center p-[10px]'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>
        

        <Doctorlist/>
      </div>
    </section>


    
    {/*-----------------------FAQ SECTION------------------------------- */}
    <section>
    <div className="container">
      <div className='flex justify-between gap-[50px] lg:gap-0'>
        <div className='w-1/3 hidden md:block'>
          <img src={faqImg} alt="" />
        </div>

        <div className='w-full md:w-1/2'>
          <h2 className='heading'>Curiosity from our patients to us: </h2>
          <FaqList/>

        </div>
      </div>
    </div>
    </section>


   




    {/*--------------------TESTIMONIALS------------------------ */}
    <section>
      <div  data-aos="fade-up" data-aos-duration="600"className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Word from our patients</h2>
          <p className='text_para text-center p-[10px]'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>
        <Testimonial/>
      </div>
    </section>



    {/*--------------------DOCTORFORM ------------------------ */}

    <Doctorform/>

  </>

  );
};

export default Home;
