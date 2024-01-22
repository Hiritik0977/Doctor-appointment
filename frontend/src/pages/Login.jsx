import {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:'',

  })

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[470px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          You <span className='text-greencolor'> Are</span> Welcome!!</h3>
          <form className='py-4 md:py-0'>
            <div className='mb-5'>
              <input type="email" placeholder='Enter your email' name='email' value={formData.email} o
              nChange={handleInputChange} 
              className='w-full  py-2 border-b border-solid border-[#7E868A] focus:outline-none focus:border-b-greencolor text-[16px] leading-7 text-textColor placeholder:text-headingColor  cursor-pointer' required/>

            </div>

            <div className='mb-5'>
              <input type="password" placeholder='Enter your password' name='password' value={formData.password} 
              onChange={handleInputChange}
               className='w-full  py-2 border-b border-solid border-[#7E868A] focus:outline-none focus:border-b-greencolor text-[16px] leading-7 text-textColor placeholder:text-headingColor  cursor-pointer' required/>

            </div>

            <div className='mt-7'>
              <button type='submit' className='w-full bg-greencolor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2'>Login</button>
            </div>


            <p className='mt-5 text-textColor text-center'>Don't have an account? <Link to='/register' className='text-greencolor font-medium ml-1'>Register</Link></p>
          </form>

      </div>

    </section>
  );
};

export default Login;
