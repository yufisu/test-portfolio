import React from "react";


const Works = () => {
  return (
    <div className="my-work-page flex items-center h-screen">
      <div className="work-left text-white flex-1 flex flex-col justify-center h-screen ml-16">
        <div className="work-title text-[3.5rem] mb-5">
          <h1>My Work</h1>
        </div >
          <div className="about-paragraph"></div>
          <p className="font-['sf-thin-italic'] w-[30rem]">&lt;p&gt;You can see and analyze my work here. Every second I find in my spare time, I try to code new projects.&lt;/p&gt;</p>
      </div>
      <div className="portfolio-grid ml-20">
        <div className="grid grid-flow-col gap-6 mt-12">
          <div className="oishii row-span-1">
            <div className="oishii-banner w-80 mb-2 hover:w-96 transition-all">
              <a href="https://yufisu.github.io/oishii-project/" target="blank">
                <img src="https://i.imgur.com/oMUH0Ff.png" alt="oishii" className="rounded-xl brightness-75 hover:brightness-50 transition-all"/>
              </a>
            </div>
            <div className="oishii-text text-white font-[sf-light-italic]">Oishii Website</div>
            <div className="text-white font-[sf-light-italic] text-xs">2023</div>
          </div>
          <div className="met">
            <div className="met-banner w-80 mb-2 hover:w-96 transition-all">
              <a href=":https://yufisu.github.io/themetmuseum/" target="blank">
                <img src="https://i.imgur.com/SFSqif8.png" alt="" className="rounded-xl brightness-75 hover:brightness-50 transition-all" />
              </a>
            </div>
            <div className="met-text text-white font-[sf-light-italic]">The Met Museum Website</div>
            <div className="text-white font-[sf-light-italic] text-xs">2023</div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Works