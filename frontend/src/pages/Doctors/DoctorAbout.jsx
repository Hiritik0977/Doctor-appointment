
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
        <span className='text-greencolor font-bold text-[24px] leading-9'>
          Dr. Abhishek
        </span>
        </h3>
        <p className='text_para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum labore consequuntur animi facere qui autem earum doloremque, explicabo quidem quis. Magnam consectetur, iste quia provident fugiat aperiam totam error.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-20px] leading-[30px] text-headingColor font-semibold'>Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-greencolor text-[15px] leading-6 font-semibold'>{formateDate('10-04-2011')} - {formateDate('03-24-2016')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in surgeon</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textcolor'>Civil Hospital, kathmandu</p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-greencolor text-[15px] leading-6 font-semibold'>{formateDate('07-04-2016')} - {formateDate('12-01-2019')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in surgeon</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textcolor'>Civil Hospital, kathmandu
            </p>
          </li>

        </ul>
      </div>


      <div className='mt-8'>
      <h3 className='text-20px] leading-[30px] text-headingColor font-semibold'>Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[10px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate('10-04-2011')} - {formateDate('03-24-2016')}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Sugeon</p>

            <p className='text-[14px] leading-5 font-medium text-textcolor'>Civil Hospital, kathmandu
            </p>
          </li>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate('10-04-2011')} - {formateDate('03-24-2016')}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Sugeon</p>

            <p className='text-[14px] leading-5 font-medium text-textcolor'>Civil Hospital, kathmandu
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;