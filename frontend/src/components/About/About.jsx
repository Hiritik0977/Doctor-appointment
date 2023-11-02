import React from 'react';
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <section>
        <div className="container">
            <div className='flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

              {/* ------------ABOUT IMG----------------*/}

              <div className="relative w-3/4 lg:w-1/2 xl:w-1/3 z-10 order-2 lg:order-1">
                     <img src={aboutImg} alt="" />
                     <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%]">
                        <img src={aboutCardImg} alt="" />
                     </div>
              </div>

              {/* ------------ABOUT content----------------*/}

              <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order:2">
                <h2 className='heading'>Proud to be the one of the nation best</h2>
                <p className='tex__para'>Doctors are one of the most important people in our society. They are lifesavers. They are the first ones to lend a helping hand when someone is struggling.</p>
                <p className="text__para mt-[30px]">Doctors are one of the most important people in our society. They are lifesavers. They are the first ones to lend a helping hand when someone is struggling.</p>
              
              
                <button className='btn'>Learn More</button>
             
              </div>
            </div>
        </div>
    </section>
  )
}

export default About;
