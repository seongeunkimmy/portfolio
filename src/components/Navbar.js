import React, { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi';

export default function Navbar() {
  
const [isOpen, setIsOpen] = useState(false);

function handleClick() {
   setIsOpen(!isOpen);
}

    return (
        <div>

             {/* // eslint-disable-next-line  */}
            
              <nav className="flex flex-wrap items-center justify-between w-full px-4 py-4 bg-white md: py-0">
              <div>
              <a href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purple-600">
                Seong-eun Kim
             </a>
             </div>
          
           <HiMenuAlt3 className="block lg:hidden" onClick={handleClick}/>
           
            
            <div className={`lg:flex ${isOpen ? "w-full block flex-grow lg:items-center lg:w-auto" : "hidden"} `}>
                <ul className="text-sm lg:flex-grow flex flex-row justify-end">
                    <li className="nav-item">
                    <a href="#projects" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    WORK
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    ABOUT
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#skills" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    SKILLS
                 </a>
                    </li>
                    <li  className="nav-item">
                    <a href="#contact" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    CONTACT
                 </a>
                    </li>
                </ul>
            </div>
            
            </nav>
            </div>
    )
}
