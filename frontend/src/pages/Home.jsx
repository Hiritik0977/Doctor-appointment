import React from 'react';
import About from '../components/About/About'


import heroImg01 from '../assets/images/c-man.jpg';
import heroImg02 from '../assets/images/c-th.jpg';
import heroImg03 from '../assets/images/c-med.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from 'react-router-dom';
import {BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
  <>
   


     {/*-----------HERO ------------------ */}
 
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        {/*-----------HERO content------------------ */}
         <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]'>We help you to live heathier</h1>
            <p className='text__para text-whiteColor'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>

            <button className='btn bg-purpleColor text-blackColor text-[16px] leading-5 font-[500] hover:bg-whiteColor text-blackColor transition-all duration-300' >Consult Now</button>
          </div>
         


         {/*-----------HERO counter------------------ */}

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

      </div>
        
         {/*-----------HERO IMAGE------------------ */}

         <div className='flex gap-[30px] justify-center'>
  <div className='w-[100%] mt-[-50px]'>
    <img src={heroImg01} alt="" className='w-full rounded-lg m-4' />
  </div>
  <div className='w-[80%] mt-[-100px]' >
    <img src={heroImg02} alt="" className='w-full rounded-lg m-4' />
  </div>
  <div className='w-[80%] mt-[-150px] mr-[10px]'>
    <img src={heroImg03} alt="" className='w-full rounded-lg m-2' />
  </div>
</div>


    </div>
    </div>
  </section>


   {/*-----------HERO section end------------------ */}
     
     <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing you the best treatment
          </h2>
          <p className='text__para text-center'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'> 
               <img src={icon01} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a doctor</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>We are committed to being your shoulder to lean on and providing honest advice for your loved one’s situation during this delicate time.</p>
             
             <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>


          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'> 
               <img src={icon02} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>We are committed to being your shoulder to lean on and providing honest advice for your loved one’s situation during this delicate time.</p>
             
             <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'> 
               <img src={icon03} alt="" />
            </div>

             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
             <p className='text-[16px] leading-7 text-textColor font[400] mt-4 text-center'>We are committed to being your shoulder to lean on and providing honest advice for your loved one’s situation during this delicate time.</p>
             
             <Link 
             to='/doctors' 
             className='w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[30px] 
             mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>

             </Link>
             </div>
          </div>

        </div>
      </div>
     </section>
     <div className="flex ">
  <div className="container bg-irisBlueColor ml-[20px] p-4 rounded-md mr-4">
    <label className='text-[26px] leading-9 text-headingColor font-[700] text-center' htmlFor="">Find a doctor</label>
    <h1 className='font-[500] text-textColor'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</h1>
  </div>
  <div className="container bg-purpleColor ml-[20px] p-4 rounded-md mr-4">
    <label className='text-[26px] leading-9 text-headingColor font-[700] text-center' htmlFor="">Our Expertise</label>
    <h1 className='font-[500] text-blackColor'>Trust in us we will never let you down. Our health expertise will give u best medical experience.</h1>
  </div>
  <div className="container bg-irisBlueColor ml-[20px] p-4 rounded-md mr-4">
    <label className='text-[26px] leading-9 text-headingColor font-[700] text-center ' htmlFor="">Suggestion you need</label>
    <h1 className='font-[500] text-textColor'>Trust in us we will never let you down. Our health expertise will give u best medical experience. Our health expertise will give u best medical experience.</h1>
  </div>
  
</div>


    <About/>

  </>

  );
};

export default Home;
