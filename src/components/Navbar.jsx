import React from 'react'
import { BiHome } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar bg-[#00df9a] h-screen w-14 flex flex-col items-center justify-between">
      <div className="main-logo h-14 flex-1">
          <img src="../images/yufis.png" alt="yufis" className='cursor-pointer'/>
      </div>
      <div className="pages-bar flex-1 flex flex-col justify-center">
        <div className="page-icons">
            <BiHome className="text-3xl mb-5 cursor-pointer"/>
        </div>
        <div className="page-icons">
          <BsPerson className="text-3xl mb-5 cursor-pointer"/>
        </div>
        <div className="page-icons">
          <FaRegEye className='text-3xl mb-5 cursor-pointer'/>
        </div>
        <div className="page-icons">
          <BsMailbox className='text-3xl mb-5 cursor-pointer'/>
        </div>
      </div>
      <div className="contact-bar flex flex-col flex-1 justify-end">
        <div className="contact-icons">
          <AiFillLinkedin className='text-xl mb-3 cursor-pointer'/>
        </div>
        <div className="contact-icons">
          <AiFillGithub className='text-xl mb-3 cursor-pointer'/>
        </div>
        <div className="contact-icons">
          <AiOutlineInstagram className='text-xl mb-12 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar