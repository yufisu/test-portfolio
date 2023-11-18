import React, { useState }  from 'react'
import { BiHome } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const location = useLocation();
  const [content, setContent] = useState('');

  const handleNavLinkClick = () => {
    setContent(`Content for ${location.pathname}`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-[#00df9a] h-screen w-14 flex flex-col items-center justify-between max-sm:w-screen max-sm:h-auto max-sm:items-center fixed z-50">
      <div className='flex flex-col items-center h-screen max-sm:h-auto'>
      <div className="main-logo h-14 flex-1 max-sm:h-0 max-sm:grid max-sm:grid-flow-col max-sm:w-screen max-sm:grid-cols-3 max-sm:justify-items-center">
        <Link to='/test-portfolio/home' className='max-sm:col-start-2'>
          <img src="https://i.imgur.com/1rgp2gY.png" alt="yufis" className='cursor-pointer max-sm:w-24 invert hover:invert-0 max-sm:col-start-2'/>
        </Link>
          <div className='flex justify-end md:hidden self-end col-start-3 items-end'>
            <button onClick={toggleNavbar}>
              <GiHamburgerMenu className='text-4xl mb-6 ml-6 cursor-pointer'/>
            </button>
          </div>
      </div>
      <div className={`pages-bar flex-1 flex flex-col justify-center items-center max-sm:flex-col max-sm:mt-12 max-sm:${isOpen ? 'block' : 'hidden'}`}>
        <div className="page-icons">
          <Link to='/test-portfolio/home' className={`${location.pathname === '/test-portfolio/home' ? 'text-white' : ''}`}>
            <BiHome className="text-3xl mb-5 cursor-pointer hover:fill-white ease-in hover:text-4xl duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-5xl max-sm:hover:text-6xl"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/about' className={`${location.pathname === '/test-portfolio/about' ? 'text-white' : ''}`}>
            <BsPerson className="text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in-out duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-5xl max-sm:hover:text-6xl"/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/works' className={`${location.pathname === '/test-portfolio/works' ? 'text-white' : ''}`}>
            <FaRegEye className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-5xl max-sm:hover:text-6xl'/>
          </Link>
        </div>
        <div className="page-icons">
          <Link to='/test-portfolio/contact' className={`${location.pathname === '/test-portfolio/contact' ? 'text-white' : ''}`}>
            <BsMailbox className='text-3xl mb-5 cursor-pointer hover:fill-white hover:text-4xl ease-in duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-5xl max-sm:hover:text-6xl'/> 
          </Link>
        </div>
      </div>
      <div className={`contact-bar flex flex-col flex-1 justify-end items-center max-sm:flex-row max-sm:mt-12 max-sm:gap-3 max-sm:${isOpen ? 'block' : 'hidden'}`}>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/yusuf-kerem-malkoç-8aba24224/" target='blank'>
            <AiFillLinkedin className='text-xl mb-3 cursor-pointer hover:fill-white hover:text-4xl duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-4xl max-sm:hover:text-5xl'/>
          </a>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/yufisu" target='blank'>
          <AiFillGithub className='text-xl mb-3 cursor-pointer hover:fill-white hover:text-4xl duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:text-4xl max-sm:hover:text-5xl'/>
          </a>
        </div>
        <div className="contact-icons">
          <a href="https://www.instagram.com/yufiskerem/" target='blank'>
          <AiOutlineInstagram className='text-xl mb-12 cursor-pointer hover:fill-white hover:text-4xl duration-100 hover:animate-bounce max-sm:hover:animate-none max-sm:mb-3 max-sm:text-4xl max-sm:hover:text-5xl'/>
          </a>
        </div>
      </div>
      </div>
   
    </div>
  )
}

export default Navbar