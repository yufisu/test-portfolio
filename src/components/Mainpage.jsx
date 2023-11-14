import React from "react";
import { BiPlus,BiLogoReact } from 'react-icons/bi';

const Mainpage = () => {
  return (
    <div className="main-page h-screen flex flex-row items-center w-[1384px] justify-around">
      <div className="welcome-text text-6xl h-96 text-white">
        <h1 className="mt-12">Hello,</h1>
        <h1>I'm Yusuf Kerem,</h1>
        <h1>doer of <em>things.</em></h1>
        <div className="text-gray-200 text-xl font-[sf-thin-italic] mt-8">Websites need me.</div>
      </div>
      <div className="plus flex h-32 justify-center">
        <BiPlus className="text-7xl text-white"/>
      </div>
      <div className="banner flex justify-start h-48 mr-48">
        <BiLogoReact className="text-[10rem] text-[#61DBFB]"/>
      </div>
    </div>
  )
}
export default Mainpage