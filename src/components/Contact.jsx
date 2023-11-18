import React from "react";

const Contact = () => {
  return (
    <div className="contact-page text-white flex items-center max-sm:justify-center">
      <div className="contact-left flex-1 justify-center ml-24 h-screen flex flex-col max-sm:h-auto max-sm:w-auto max-sm:ml-0 max-sm:items-center max-sm:flex-auto">
        <div className="texts flex flex-col mb-12 max-sm:justify-center max-sm:mb-5">
          <div className="title text-[3.5rem] mb-12 max-sm:mb-4 max-sm:mt-28">
            <h1 className="max-sm:w-fit max-sm:m-auto">Contact me</h1>
          </div>
          <div className="paragraph font-['sf-thin-italic'] w-10/12 max-sm:w-auto max-sm:text-center max-sm:p-4"> I look forward to opportunities to work freelance and have a wide variety of experiences with unique clients. If you like my work or have questions about them, you can contact me using the form below.</div>
        </div>
        <div className="submit-bar mb-22 w-[28rem] max-sm:w-auto max-sm:p-4">
          <div className="top-row flex justify-between w-full gap-3 max-sm:w-auto">
              <input type="text" className="text-white border border-solid border-gray-400 bg-transparent p-3 w-full" placeholder="Name"/>
              <input type="email" className="text-white border border-solid border-gray-400 bg-transparent p-3 w-full" placeholder="Email"/>
          </div>
          <div className="mid-row">
            <div>
              <input type="text" className="text-white border border-solid border-gray-400 bg-transparent p-3 mt-3 w-full" placeholder="Subject"/>
            </div>
          </div>
          <div className="bot-row">
            <div>
              <textarea rows="4" cols="50" name="comment" form="usrform" className="text-white border border-solid border-gray-400 bg-transparent p-3 mt-3 w-full pb-24 resize-none" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="send-button w-[450px] flex justify-end max-sm:w-auto">
            <button className="border border-solid border-[#00df9a] px-3 py-1 max-sm:px-4 max-sm:py-1 max-sm:text-lg rounded-md mt-3 hover:bg-[#00df9a] hover:text-black ease-in duration-150">Send</button>
          </div>
        </div>
      </div>
      <div className="contact-right flex-1"></div>
    </div>
  )
}

export default Contact