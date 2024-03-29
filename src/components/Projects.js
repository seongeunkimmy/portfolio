import React from 'react';
import { projects } from "../data";
import Fade from 'react-reveal/Fade';


export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font my-10">
        <div className="px-3 py-10 mx-auto text-center lg:px-28">
        <div className="flex flex-col w-full mb-10">
        <Fade top duration={750} delay={500}>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mt-12 mb-10 text-white">Projects</h1>
        </Fade>
      </div>
  

          {projects.map((project) => (
            <div className="w-full grid-cols-2">
           
              <div className="flex relative overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute my-6 inset-0 w-full h-96 object-cover object-center"
                  src={project.image}
                />
                <div className="flex flex-col justify-center my-6 relative w-60 md:w-full h-96 border-4 border-gray-800 bg-gray-900 opacity-0 transform hover:scale-100 transition duration-500 ease-in-out hover:opacity-100">
                  <h2 className="tracking-widest text-md title-font font-medium text-indigo-400 mb-1">
                    {project.techStack}
                  </h2>
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-xl">{project.description}</p>
                </div>
              </div>
              
              <Fade top duration={850} delay={500}>
              <div className="flex justify-center items-center">
              {project.link && (
                <button className="px-3 md:px-5 py-3 border-2 mx-2 my-8 bg-transparent hover:bg-white text-gray-400 font-semibold hover:text-gray-500 border-2 border-white hover:border-transparent"><a href={project.link} target="_blank" rel="noreferrer">VIEW LIVE</a></button>
              )}
                <button className="px-3 md:px-5 py-3 border-2 mx-2 my-8 bg-transparent hover:bg-white text-gray-400 font-semibold hover:text-gray-500 border-2 border-white hover:border-transparent"><a href={project.code} target="_blank" rel="noreferrer">VIEW CODE</a></button>
              </div>
              </Fade>
              </div>
          ))}
        </div>
     
    
       
        </section>

    )
}


