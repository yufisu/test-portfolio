import React, { useState }  from 'react'
import { BiHome } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {
  const location = useLocation();
  const [content, setContent] = useState('');

  const handleNavLinkClick = () => {
    setContent(`Content for ${location.pathname}`);
  };

  return (
    <div className="navbar bg-[#00df9a] h-screen w-14 flex flex-col items-center justify-between">
      <div className="main-logo h-14 flex-1">
          <img src="../../images/yufis.png" alt="yufis" className='cursor-pointer'/>
      </div>
      <div className="pages-bar flex-1 flex flex-col justify-center">
        <div className="page-icons">
          <Link to='/home' className={`${location.pathname === '/home' ? 'text-white' : ''}`}>
            <BiHome className="text-3xl mb-5 cursor-pointer hover:fill-white ease-in hover:text-4xl duration-100"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/about' className={`${location.pathname === '/about' ? 'text-white' : ''}`}>
            <BsPerson className="text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in-out duration-100"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/works' className={`${location.pathname === '/works' ? 'text-white' : ''}`}>
            <FaRegEye className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100'/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/contact' className={`${location.pathname === '/contact' ? 'text-white' : ''}`}>
            <BsMailbox className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100'/> 
          </Link>
        </div>
      </div>
      <div className="contact-bar flex flex-col flex-1 justify-end">
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/yusuf-kerem-malkoç-8aba24224/" target='blank'>
            <AiFillLinkedin className='text-xl mb-3 cursor-pointer hover:fill-white hover:text-4xl duration-100'/>
          </a>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/yufisu" target='blank'>
          <AiFillGithub className='text-xl mb-3 cursor-pointer hover:fill-white hover:text-4xl duration-100'/>
          </a>
        </div>
        <div className="contact-icons">
          <a href="https://www.instagram.com/yufiskerem/" target='blank'>
          <AiOutlineInstagram className='text-xl mb-12 cursor-pointer hover:fill-white hover:text-4xl duration-100'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar