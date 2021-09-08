import React, {useState} from 'react';


export default function Navbar() {
   const [navOpen, setNavOpen] = useState(false);
    return (
        <div>

             {/* // eslint-disable-next-line  */}
            
              <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
             <a href="#intro" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purple-600">
                Seong-eun Kim
             </a>
             <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
            </div>
                <a href="#projects" className="mr-5 hover:text-purple">
                    WORK
                </a>
                <a href="#about" className="mr-5 hover:text-purple">
                    ABOUT
                </a>
                <a href="#skills" className="mr-5 hover:text-purple">
                    SKILLS
                </a>
                <a href="#contact" className="mr-5 hover:text-purple">
                    CONTACT
                </a>
             
           
                </div>
               
            </nav>
            </div>
    )
}
