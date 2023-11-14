import React from "react";

const Contact = () => {
  return (
    <div className="contact-page text-white flex items-center">
      <div className="contact-left flex-1 justify-center ml-24 h-screen flex flex-col">
        <div className="texts flex flex-col mb-12">
          <div className="title text-[3.5rem] mb-12">
            <h1>Contact me</h1>
          </div>
          <div className="paragraph font-['sf-thin-italic'] w-10/12"> I look forward to opportunities to work freelance and have a wide variety of experiences with unique clients. If you like my work or have questions about them, you can contact me using the form below.</div>
        </div>
        <div className="submit-bar mb-22 w-[370px]">
          <div className="top-row flex justify-start">
            <div>
              <input type="text" className="text-white border border-solid border-gray-400 bg-transparent p-3 mr-3" placeholder="Name"/>
            </div>
            <div>
                <input type="email" className="text-white border border-solid border-gray-400 bg-transparent p-3" placeholder="Email"/>
            </div>
          </div>
          <div className="mid-row">
            <div>
              <input type="text" className="text-white border border-solid border-gray-400 bg-transparent py-3 pl-3 mt-3 pr-[247px]" placeholder="Subject"/>
            </div>
          </div>
          <div className="bot-row">
            <div>
              <input type="text" className="text-white border border-solid border-gray-400 bg-transparent py-3 pb-32 pl-3 mt-3 pr-[247px]" placeholder="Message"/>
            </div>
          </div>
          <div className="send-button w-[450px] flex justify-end">
            <button className="border border-solid border-[#00df9a] px-3 py-1 rounded-md mt-3 hover:bg-[#00df9a] hover:text-black ease-in duration-150">Send</button>
          </div>
        </div>
      </div>
      <div className="contact-right flex-1"></div>
    </div>
  )
}

export default Contact