
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = (user) => {
  console.log(user, "user")
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
        <span className='text-greencolor font-bold text-[24px] leading-9'>
          {user?.user?.user.firstName}{user?.user?.user.lastName}
        </span>
        </h3>
        <p className='text_para'>
        I am a surgeon with a high level of expertise in the field, acquired through rigorous education, training, and experience.With 4 years of practice in the field of surgery, I have encountered a wide range of cases and scenarios. 
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-20px] leading-[30px] text-headingColor font-semibold'>Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-greencolor text-[15px] leading-6 font-semibold'>{formateDate('10-04-2011')} - {formateDate('03-24-2016')}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>{user.user?.qualification}</p>
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
