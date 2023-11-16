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
    <div className="navbar bg-[#00df9a] h-screen w-14 flex flex-col items-center justify-between sticky">
      <div className="main-logo h-14 flex-1">
          <img src="https://i.imgur.com/8U55YXt.png" alt="yufis" className='cursor-pointer'/>
      </div>
      <div className="pages-bar flex-1 flex flex-col justify-center items-center">
        <div className="page-icons">
          <Link to='/test-portfolio/home' className={`${location.pathname === '/test-portfolio/home' ? 'text-white' : ''}`}>
            <BiHome className="text-3xl mb-5 cursor-pointer hover:fill-white ease-in hover:text-4xl duration-100"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/about' className={`${location.pathname === '/test-portfolio/about' ? 'text-white' : ''}`}>
            <BsPerson className="text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in-out duration-100"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/works' className={`${location.pathname === '/test-portfolio/works' ? 'text-white' : ''}`}>
            <FaRegEye className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100'/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/contact' className={`${location.pathname === '/test-portfolio/contact' ? 'text-white' : ''}`}>
            <BsMailbox className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100'/> 
          </Link>
        </div>
      </div>
      <div className="contact-bar flex flex-col flex-1 justify-end items-center">
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