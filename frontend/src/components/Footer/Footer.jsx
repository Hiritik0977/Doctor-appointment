

import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillGithub, AiOutlineInstagram, AiFillInstagram} from 'react-icons/ai';

const socialLinks = [
  {
    path:"https://github.com/Hiritik0977",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:"https://www.instagram.com/soni_hrithik/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:"https://www.linkedin.com/in/hiritik-sonar-b90238226/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>,
  },
  
];

const quickLinks01 = [
   {
    path: "/home",
    display: "Home",
   },
   {
    path: "/",
    display: "About Us",
   },
   {
    path: "/services",
    display: "services",
   },
   {
    path: "/store",
    display: "store",
   }
];

const quickLinks02 = [
   {
    path: "/Find-a-doctor",
    display:"Find a doctor",
   },
   {
   path:"/",
   display:"Request an appointment",
   },
   {
    path: "/",
   display:"Find a Location",
   },
   {
    path:"/",
   display:"Get a Opinion",
   },
];

const quickLinks03 = [
   {
    path:"/",
   display:"Donate",
   },
   {
    path:"/contact",
   display:"Contact Us",
   },
];

const Footer = () => {

  const year = new Date().getFullYear()
   return (
    <footer className='pb-10 pt-10 bg-headingColor'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
            <div>
              <img src={logo} alt="" className='w-[120px] '/>
              <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright {year} developed by Hiritik all right reserved</p>
              
            </div>

            

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor'>Quick Links</h2>
              <ul>{quickLinks01.map((item,index)=> <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
                )}
                </ul>
            </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor'>I want to:</h2>
              <ul>{quickLinks02.map((item,index)=> <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
                )}
                </ul>
            </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor'>Support</h2>
              <ul>{quickLinks03.map((item,index)=> <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
                )}
                </ul>
            </div>

            <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-whiteColor mr-5'>Social media</h2>
            <div className='px-3 mt-[30px]  '>
                {socialLinks.map((link,index)=> <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center bg-whiteColor justify-center group hover:bg-greencolor hover:border-none transition-all duration-300  '>
                  {link.icon}
                </Link>)}
              </div>
              </div>
        </div>
      </div>
    </footer>
   );
};


export default Footer;
