import React, { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi';
import Fade from 'react-reveal/Fade';

export default function Navbar() {
  
const [isOpen, setIsOpen] = useState(false);

function handleClick() {
   setIsOpen(!isOpen);
}

    return (
        <div className="flex">

             {/* // eslint-disable-next-line  */}
              <Fade top duration={750} delay={1200}>
              <nav className="fixed flex flex-wrap items-center justify-between w-full px-8 py-6 bg-transparent md: py-0">
              <div>
              <a href="/" className="text-5xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-purple-500">
                K.
             </a>
             </div>
          
           <HiMenuAlt3 className="block text-3xl w-10 h-10 border-2 p-1" onClick={handleClick}/>
           
            
            <div className={` ${isOpen ? "w-full block flex-grow" : "hidden"} `}>
                <ul className="text-sm lg:flex-grow flex flex-col justify-end items-end py-2">
                    <li className="nav-item">
                    <a href="#projects" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                    WORK
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                    ABOUT
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#skills" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                    SKILLS
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#contact" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                    CONTACT
                 </a>
                    </li>
                </ul>
            </div>
            
            </nav>
            </Fade>
            </div>
    )
}
