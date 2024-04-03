import React, { useState, useEffect } from 'react';
import axios from 'axios';
import doctorImg from '../../assets/images/doctor-img02.jpg';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import DocterApiService from '../../api/docter.service'

import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const {id} = useParams();
  const [doctor, setDoctor] = useState(null);
  const [tab, setTab] = useState('about');

  useEffect(() => {
    const fetchDoctor = async (id) => {
      try {
        const response = await DocterApiService.getDocterById(id);
        setDoctor(response.data.doctor); // Assuming response contains doctor details
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctor(id);
  }, [id]);

  return (
    <section>
      <div className='max-w-[1170px] px-20 mx-auto'>
        <div className='grid md:grid-cols-2 gap-[50px]'>
          <div className='md:cols-span-2'>
            {doctor && (
              <div className='flex items-center gap-5'>
                <figure className='max-w-[200px] max-h-[200px] '>
                  <img src={doctorImg} alt={doctor.name} />
                </figure>
                <div>
                  <span className='bg-greencolor text-whiteColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                    {doctor.specialization.name}
                  </span>
                  <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{doctor.user.firstName}{doctor.user.lastName}</h3>
                  <div className='flex items-center gap-[6px]'>
                    <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                      <img src={starIcon} alt='' />
                      {doctor.rating}
                    </span>
                    <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-headingColor'>({doctor.reviews})</span>
                  </div>
                  <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] '>{doctor.description}</p>
                </div>
              </div>
            )}

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button onClick={() => setTab('about')} className={`${tab === 'about' && 'border-b border-solid border-greencolor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About
              </button>
              <button onClick={() => setTab('feedback')} className={`${tab === 'feedback' && 'border-b border-solid border-greencolor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {tab === 'about' && <DoctorAbout user={doctor} />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
