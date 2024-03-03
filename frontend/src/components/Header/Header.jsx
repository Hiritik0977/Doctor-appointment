
import {useEffect, useRef} from 'react';
import logo from '../../assets/images/logo1.png';

import userImg from '../../assets/images/avatar-icon.png';
import {NavLink, Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';

const navlinks = [
  {
     path:'./home',
     display:'Home '
  },
  {
     path:'./doctors',
     display:'Find a doctor'
  },
  {
    path:'./services',
    display:'Services'
  },
  {
    path:'./contact',
    display:'Contact'
  },
  {
    path:'/store',
    display: 'Our store'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky__header');
      }
      else{
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(()=>{
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header flex items-center ' ref={headerRef} >
      <div className="container">
         <div className='flex items-center justify-between'>
              {/* ------LOGO------ */}
              <div >
                <Link to='./home'>
                <img  src={logo} alt="" className='w-[120px] '  />
                </Link>
              </div>

              {/* ------MENU------ */}

              <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <ul className='menu flex items-center bg-whiteColor gap-[2rem]'>
                    {
                      navlinks.map((link, index) => <li key={index}>
                        <NavLink to={link.path} className={navClass=> navClass.isActive 
                          ? 'text-lightgreencolor text-[16px] leading-7 font-[600]' 
                          : 'text-blackColor text-[16px] leading-7 font-[500] hover:text-lightgreencolor'}
                          >
                            {link.display}
                            </NavLink>
                      </li>) 
                        
                    }
                </ul>
              </div>

           {/* ------NAV RIGHT------ */}

           <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt="" />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
                 <button className='bg-greencolor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-lightgreencolor hover:text-black transition-all duration-300'>Login</button>
            </Link>

           <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
           </span>

           </div>

         </div>
      </div>

    </header>
    )
  
}

export default Header;
