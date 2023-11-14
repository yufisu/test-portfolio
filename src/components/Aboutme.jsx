import React from "react";
import { BiLogoReact, BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";

const Aboutme = () => {
  return (
    <div className="about-me-page flex items-center h-screen">
      <div className="about-text text-white flex-1 flex flex-col justify-center h-screen ml-24">
        <div className="about-me text-[3.5rem] mb-12">
          <h1>About me</h1>
        </div>
          <div className="about-paragraph"></div>
          <p className="font-['sf-thin-italic'] mb-3 w-[30rem]">&lt;p&gt; I’m on a mission to learn how to develop interactive, good-looking and user-friendly websites with a good understanding of the new technologies found in the community. &lt;/p&gt;</p>
          <p className="font-['sf-thin-italic'] mb-3 w-[30rem]">&lt;p&gt; I love turning design ideas and code lines to responsive websites and I am so excited about what there is to learn.&lt;/p&gt;</p>
          <p className="font-['sf-thin-italic']  mb-3 w-[30rem]">&lt;p&gt;I have experience in HTML5 & CSS3 to create modern websites and Javascript with React to make them interactive. Also I have a good understanding of aesthetics.&lt;/p&gt;</p>
          <p className="font-['sf-thin-italic'] w-[30rem]">You can see more on Github.</p>
        
      </div>
      <div className="cube-banner flex-1 w-1/2 h-full top-0 absolute right-0 overflow-hidden flex items-center">
        <div className="cubespinner">
          <div className="faces face1">
            <BiLogoReact color="#61DBFB"/>
          </div>
          <div className="faces face2">
            <AiFillHtml5 color="#F06529"/>
          </div>
          <div className="faces face3">
            <BiLogoCss3 color="#2965f1"/>
          </div>
          <div className="faces face4">
            <BiLogoJavascript color="#F0DB4F"/>
          </div>
          <div className="faces face5">
            <AiFillGithub color="white"/>
          </div>
          <div className="faces face6">
            <BiLogoReact color="#61DBFB"/>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Aboutme