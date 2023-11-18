import React from "react";


const Works = () => {
  return (
    <div className="my-work-page flex items-center h-screen max-sm:h-screen max-sm:flex-col">
      <div className="work-left text-white flex-1 flex flex-col justify-center h-screen ml-24 max-sm:h-auto max-sm:ml-0 max-sm:p-5 max-sm:">
        <div className="work-title text-[3.5rem] mb-5 max-sm:mb-3 max-sm:mt-24 max-sm:flex max-sm:justify-center">
          <h1>My Work</h1>
        </div >
          <div className="about-paragraph"></div>
          <p className="font-['sf-thin-italic'] w-[30rem] max-sm:w-auto max-sm:text-center">&lt;p&gt;You can see and analyze my work here. Every second I find in my spare time, I try to code new projects. Please note that these are not my designs, just the code.&lt;/p&gt;</p>
      </div>
      <div className="portfolio-grid ml-20 max-sm:ml-0 max-sm:pb-12 max-sm:pt-4">
        <div className="grid grid-flow-col gap-6 mt-12 max-sm:grid-flow-row max-sm:mt-0">
          <div className="oishii row-span-1">
            <div className="oishii-banner w-80 mb-2 hover:w-96 transition-all max-sm:hover:w-80">
              <a href="https://yufisu.github.io/oishii-project/" target="blank">
                <img src="https://i.imgur.com/oMUH0Ff.png" alt="oishii" className="rounded-xl brightness-75 hover:brightness-50 transition-all max-sm:hover:brightness-75 max-sm:active:brightness-50"/>
              </a>
            </div>
            <div className="oishii-text text-white font-[sf-light-italic]">Oishii Website</div>
            <div className="text-white font-[sf-light-italic] text-xs">2023</div>
          </div>
          <div className="met">
            <div className="met-banner w-80 mb-2 hover:w-96 transition-all max-sm:hover:w-80">
              <a href=":https://yufisu.github.io/themetmuseum/" target="blank">
                <img src="https://i.imgur.com/SFSqif8.png" alt="" className="rounded-xl brightness-75 hover:brightness-50 transition-all max-sm:hover:brightness-75 max-sm:active:brightness-50"/>
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