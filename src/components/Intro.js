import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Intro() {
    return (
        <section id="intro" className="text-gray-400 bg-gray-900 body-font">
         <div className="my-28 md:my-36 container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
         <div className="lg:flex-grow p-4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Fade top duration={1000} delay={500}>
            <h4 className="text-indigo-300 font-bold mb-2">Hello, I'm </h4>
            <h1 className="title-font lg:text-6xl md:text-4xl mb-8 font-large text-white font-bold">Seong-eun Kim.</h1>
            </Fade>
            <Fade left duration={1000} delay={1000}>
            <span className="w-2/4 mb-8 sm:text-sm md:text-1xl lg:text-2xl leading-relaxed">A Berlin-based full-stack web developer. I'm passionate about learning new things, making creative projects. </span>
            </Fade>
        </div>
 
        </div>
        </section>
    )
}
