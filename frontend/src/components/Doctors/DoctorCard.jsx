import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import starIcon from '../../assets/images/Star.png';

import Photo from '../../assets/images/c-man.jpg';

const DoctorCard = ({ doctor }) => {
  const { _id, user, specialization, experience, qualification, photo } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={Photo || defaultPhoto} className="w-full rounded-[10px]" alt="" />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[500] mt-3 lg:mt-5">
        {user.first_name} {user.last_name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#9BE5AA] text-greencolor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialization.name}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-1 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="Star Icon" />
            {experience}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({qualification})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] leading-[30px] font-semibold text-headingColor">
            +{1500} patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">{user.email}</p>
        </div>

        <Link
          to={`/doctors/${_id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border[#181A1E] mt-[15px] mx-auto flex items-center justify-center group hover:bg-greencolor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
