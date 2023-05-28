/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
   <center>
    <nav className="shadow-lg shadow-gray-400/40 mb-5 dark:bg-gray-800  w-fit rounded-md   ">
        <div className="container flex items-center justify-center text-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="/" className="scroll-smooth text-gray-800 transition-colors duration-200 transform dark:text-gray-200  rounded-md px-2 py-2  w-fit p-4   hover:bg-yellow-400 hover:text-black hover:text-balck mx-1.5 sm:mx-6">home</a>
              
            <a  href="/aboyt" className=" border-b-2 border-transparent   transition-colors duration-200 transform dark:hover:text-gray-200  w-fit p-4  rounded-md px-2 py-2 hover:bg-yellow-400 hover:text-black hover:text-balck mx-1.5 sm:mx-6">about</a>

            <a href="/projects" className="border-b-2 border-transparent   transition-colors duration-200 transform dark:hover:text-gray-200 w-fit p-4  rounded-md px-2 py-2 hover:bg-yellow-400 hover:text-black hover:text-balck mx-1.5 sm:mx-6">projects</a>

            <a href="/skills" className=" border-b-2 border-transparent   transition-colors duration-200 transform dark:hover:text-gray-200  w-fit p-4 rounded-md px-2 py-2 hover:bg-yellow-400 hover:text-black hover:text-balck mx-1.5 sm:mx-6">skills</a>

            <a  href="#" className=" border-b-2 border-transparent   transition-colors duration-200 transform dark:hover:text-gray-200  w-fit p-4  rounded-md px-2 py-2 hover:bg-yellow-400 hover:text-black hover:text-balck mx-1.5 sm:mx-6">blog</a>
            
        </div>
    </nav>
    </center>
  )
}
