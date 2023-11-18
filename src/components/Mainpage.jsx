import React from "react";
import { BiPlus,BiLogoReact } from 'react-icons/bi';

const Mainpage = () => {
  return (
    <div className="main-page h-screen flex flex-row items-center w-[1384px] justify-between max-sm:w-screen max-sm:flex-col max-sm:h-auto">
      <div className="welcome-text text-6xl h-96 text-white max-sm:ml-4 max-sm:text-7xl max-sm:mt-40 xl:max-2xl:ml-24 lg:max-xl:ml-24 md:max-lg:ml-24 sm:max-md:ml-24">
        <h1 className="mt-12 max-sm:mb-5 max-sm:mt-1">Hello,</h1>
        <h1 className="max-sm:mb-5">I'm Yusuf Kerem,</h1>
        <h1>doer of <em>things.</em></h1>
        <div className="text-gray-200 text-xl font-[sf-thin-italic] mt-8 max-sm:mt-5">Front-end developer.</div>
      </div>
      <div className="plus flex h-32 justify-center max-sm:hidden">
        <BiPlus className="text-7xl text-white"/>
      </div>
      <div className="banner flex justify-start h-48 mr-48 max-sm:mr-0 max-sm:mb-36 max-sm:hidden">
        <BiLogoReact className="text-[10rem] text-[#61DBFB] hover:text-[12rem] ease-in duration-150 hover:rotate-[60deg]"/>
      </div>
    </div>
  )
}
export default Mainpage