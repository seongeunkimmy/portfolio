import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { CgArrowLongRight } from 'react-icons/cg';



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .then(() => {
        e.target.reset();
      })
      .catch((error) => alert(error));
  }
    return (
        <section id="contact"  className="text-gray-400 bg-gray-900 body-font my-10">
        <div  className="container px-5 py-10 mx-auto text-center lg:px-28">
        <div className="flex flex-col w-full mb-20">
        <Fade top duration={750} delay={500} distance="30px">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mt-12 mb-24 text-white">Contact</h1>
            <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center" >
            <h2 className="text-indigo-300 text-4xl title-font font-medium mb-4">ANY QUESTIONS?</h2>
            <span className="text-xl ">Shoot me an email here! </span>
            <span className="text-xl ">Or fine me on the internet </span>
            <Fade left duration={1000} delay={750} >
            <CgArrowLongRight className="text-6xl text-indigo-300 mt-8" />
            </Fade>
            </div>
            <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col border-2 border-indigo-300 px-6 md:ml-auto w-full py-6 md:py-8 mt-8 md:mt-0">
         
          <div className="relative mb-4">
           
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)} 
              placeholder="Name"
              className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
         
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
        
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100  px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="place-self-center w-32 bg-transparent hover:bg-purple-500 text-purple-400 font-semibold hover:text-white py-2 px-5 border-2 border-purple-600 hover:border-transparent">
            SEND
          </button>
        </form>

</div>
  </Fade>
        </div>
        </div>
        </section>

       
    )
}
