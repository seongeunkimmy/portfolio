import React, {useState} from 'react';


export default function Navbar() {
   const [navOpen, setNavOpen] = useState(false);
    return (
        <div>

             {/* // eslint-disable-next-line  */}
            
              <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
             <a href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purple-600">
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
            <div className={"lg:flex flex-grow items-center" + (navOpen ? "flex" : "hidden")}>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li>
                    <a href="#projects" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    WORK
                 </a>
                    </li>
                    <li>
                    <a href="#about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    ABOUT
                 </a>
                    </li>
                    <li>
                    <a href="#skills" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    SKILLS
                 </a>
                    </li>
                    <li>
                    <a href="#contact" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                    CONTACT
                 </a>
                    </li>
                </ul>
            </div>
            
           
                </div>
               
            </nav>
            </div>
    )
}
