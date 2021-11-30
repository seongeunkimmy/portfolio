import React from 'react';
import { skills } from '../skillData.js';
import { RiCheckboxLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';

export default function Skills() {
    return (
        <section id="skills"  className="text-gray-400 bg-gray-900 body-font my-10">
        <div  className="container px-5 py-10 mx-auto text-center lg:px-28">
        <Fade top duration={750} delay={500} distance="30px">
        <div className="flex flex-col w-full mb-10">
       
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-white">Skills</h1>
        </div>
        <div  className="grid grid-cols-3 justify-items-center">
            {skills.map((skills) => (
                
                <div key={skills} className="p-2 sm:w-1/2 w-full">
                <div className="bg-transparent flex p-4 h-full items-center">
                <RiCheckboxLine className="text-purple-400 w-8 h-8 flex-shrink-0 mr-4" />
                <span className="text-xl title-font font-medium text-white">
                  {skills.tech}
                </span>
              </div>
            </div>
         
            ))}
            
        </div>
     </Fade>
        </div>
       
        </section>

    )
}
