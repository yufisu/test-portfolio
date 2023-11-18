import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const YourFormComponent = () => {
    const [formData, setFormData] = React.useState({
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setFormData({

      });
    };
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('yusuf_kerem', 'yusuf_form', form.current, 'TUw3MdvcXWjjjCtdc')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      
  };
  
  

  return (
    <div className="contact-page text-white flex items-center max-sm:justify-center">
      <div className="contact-left flex-1 justify-center ml-24 h-screen flex flex-col max-sm:h-auto max-sm:w-auto max-sm:ml-0 max-sm:items-center max-sm:flex-auto">
        <div className="texts flex flex-col mb-12 max-sm:justify-center max-sm:mb-5">
          <div className="title text-[3.5rem] mb-12 max-sm:mb-4 max-sm:mt-28">
            <h1 className="max-sm:w-fit max-sm:m-auto">Contact me</h1>
          </div>
          <div className="paragraph font-['sf-thin-italic'] w-10/12 max-sm:w-auto max-sm:text-center max-sm:p-4"> I look forward to opportunities to work freelance and have a wide variety of experiences with unique clients. If you like my work or have questions about them, you can contact me using the form below.</div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="submit-bar mb-22 w-[28rem] max-sm:w-auto max-sm:p-4">
            <div className="top-row flex justify-between w-full gap-3 max-sm:w-auto">
                <input type="text" name="from_name" className="text-white border border-solid border-gray-400 bg-transparent p-3 w-full" placeholder="Name" required/>
                <input type="email" name="user_email" className="text-white border border-solid border-gray-400 bg-transparent p-3 w-full" placeholder="Email" required/>
            </div>
            <div className="mid-row">
              <div>
                <input type="text" name="subject" className="text-white border border-solid border-gray-400 bg-transparent p-3 mt-3 w-full" placeholder="Subject" required/>
              </div>
            </div>
            <div className="bot-row">
              <div>
                <input rows="4" cols="50" type="text" name="message" className="text-white border border-solid border-gray-400 bg-transparent p-3 mt-3 w-full pb-40 resize-none" placeholder="Message" required></input>
              </div>
            </div>
            <div className="send-button w-[450px] flex justify-end max-sm:w-auto">
              <button value="Send" type="submit" className="border border-solid border-[#00df9a] px-3 py-1 max-sm:px-4 max-sm:py-1 max-sm:text-lg rounded-md mt-3 hover:bg-[#00df9a] hover:text-black ease-in duration-150">Send</button>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-right flex-1"></div>
    </div>
  )
}

export default Contact