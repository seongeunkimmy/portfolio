import React from 'react'

export default function Intro() {
    return (
        <section id="intro">
         <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
         <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h4 className="text-indigo-300 font-bold mb-2">Hello, I'm </h4>
            <h1 className="title-font lg:text-6xl mb-8 font-large text-white font-bold">Seong-eun Kim.</h1>
            <span className="w-2/4 mb-8 sm:text-sm md:text 1xl lg:text-2xl leading-relaxed">A Berlin-based full-stack web developer. I'm passionate about learning new things, making creative projects. </span>
        </div>
        </div>
        </section>
    )
}
