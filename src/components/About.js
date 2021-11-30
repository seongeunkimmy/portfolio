import React from 'react';
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <section id="about" className="text-gray-400 bg-gray-900 body-font my-10">
         <div  className="container px-5 py-10 mx-auto text-center lg:px-28">
         
         <div className="flex flex-col w-full mb-10">
         <Fade left duration={750} delay={500}>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-24 text-white">About Me</h1>
            <div className="flex flex-row justify-center items-center"> 
            <img src="images/about.jpg" alt="profile photo" className="w-72 h-80 mx-12 rounded-full"/>
            <div className="w-72 flex flex-col mx-12">
            <span className="text-lg"> Hello World! 👋  </span>
            <span className="text-lg"> I am a Full-Stack Web Developer who is getting into coding more and more everyday. I love to make something new creatively out of the great curiosity.</span>
            <span className="text-lg mt-8"> Other than coding, I love making music, walking around and looking for something new and cool. </span>
            </div>
            </div>
            <button className="mt-12 place-self-center w-38 bg-transparent hover:bg-purple-500 text-purple-400 font-semibold hover:text-white py-3 px-5 border-2 border-purple-600 hover:border-transparent">CV DOWNLOAD</button>
       
          </Fade>
        </div>
       
        </div>
        </section>
       
    )
}


