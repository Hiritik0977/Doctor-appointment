import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faq-item p-5 lg:p-5 rounded-[16px] border border-solid border-[#D9DCE2] mb-4 cursor-pointer'>
      <div className='flex items-center justify-between gap-6' onClick={toggleAccordion}>
        <h4 className='faq-question text-lg lg:text-xl leading-7 lg:leading-5 text-headingColor'>
          {item.question}
        </h4>
        <div className={`faq-toggle-btn w-8 h-8 lg:w-10 lg:h-10 border border-solid border-[#141F21] rounded flex items-center justify-center ${isOpen ? 'bg-greencolor text-whiteColor' : ''}`}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className='faq-content mt-6'>
          <p className='text-lg leading-7 lg:text-xl lg:leading-8 font-[500] text-textColor'>
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
