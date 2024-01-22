import React, {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png';
import { formateDate } from '../../utils/formateDate';
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <div className='mb-[50px]'>
      <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
        All reviews (40)
      </h4>

      <div className='flex justify-between gap-10 mb-[30px]'>
        <div className='flex-gap-3'>
          <figure className='w-10 h-10 rounded-full'>
            <img className='w-full' src={avatar} alt="" />
          </figure>

          <div>
            <h5 className='text-[16px] leading-6 text-greencolor font-bold'>Hrithik 
            </h5>
            <p className='text-[14px] leading-6 text-textColor'>
              {formateDate('02-14-2022')}
            </p>
            <p className='text_para mt-3 font-medium text-[15px]'>
              Good services, Highly recommended
            </p>
          </div>
        </div>

        <div className='flex gap-1'>
          {[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color='#0067ff' />)}
        </div>
      </div>
  
      {!showFeedbackForm && <div className='text-center '><button className='btn bg-greencolor' onClick={()=>setShowFeedbackForm(true)}>Give Fedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm/>}
    </div>


  )
}

export default Feedback;
