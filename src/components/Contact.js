import React from 'react';
import {ImArrowDown} from 'react-icons/im'


export default function Contact() {
    return (
        <section id="contact"  className="text-gray-400 bg-gray-900 body-font">
        <div  className="container px-5 py-10 mx-auto text-center lg:px-28">
        <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-8 text-white">Contact</h1>
            <div className="flex flex-col justify-center items-center" >
            <h2 className="text-indigo-300 text-2xl title-font font-medium m-2">Any questions?</h2>
            <span className="text-xl m-2">Shoot me an email here or find me on the internet! </span>
            </div>
            
            <button class="my-12 place-self-center w-32 bg-transparent hover:bg-purple-500 text-purple-400 font-semibold hover:text-white py-3 px-5 border-2 border-purple-600 hover:border-transparent">
  CONTACT 
</button>
  
        </div>
        </div>
        </section>

       
    )
}
