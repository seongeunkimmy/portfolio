import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
export default function Footer() {
    return (

<section id="contact"  className="text-gray-400 bg-gray-900 body-font">
<div  className="container px-5 py-10 mx-auto text-center lg:px-28">
<div className="flex flex-col w-full mb-20 justify-center items-center"> 
     <div className="flex flex-row w-full justify-center items-center m-2">
     <a href="https://www.linkedin.com/in/seongeun-kim/" target="_blank" rel="noreferrer"><FaLinkedinIn className="m-2 w-10 h-8 text-white text-3xl hover:animate-fade-in-down"/></a>
      <a href="https://github.com/seongeunkimmy" target="_blank" rel="noreferrer"><FaGithub className="m-2 w-10 h-8 text-white text-3xl hover:animate-fade-in-down"/></a>

     </div>
     <span>© 2021 Seong-eun Kim. All rights reserved.</span>
 
     
        </div>
        </div>
        </section>
 
    )
}

