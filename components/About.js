/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import { motion,MotionConfig  } from "framer-motion"

export default function About() {
  return (
   
    <div id='abt' className=' text-gray-500  dark:text-gray-100 bg-gray-100 h-full dark:bg-gray-800 px-4 py-4'>
         
      <span id='abtText' className='text-3xl font-bold text-gray-800  md:w-fit  p-2 rounded-md text-center shadow-md bg-yellow-400 dark:text-white' prefix='#'><a className='sm:w-2/5 md:w-fit ' href="#abt"># Introduction </a></span>

        <br /> <br />
        <img src="programmer.svg" width="400" align="right" className='sm:aling-middle mr-10 mt-10 bg-gray-100 rounded-3xl transition-all' height="300" alt="Wow" />
        <div className='max-w-3xl'>
        <kbd className='dark:text-gray-400 '>
       <span className='text-2xl text-yellow-500 font-bold'> I am Spandan</span> I&apos;m 15 years old.
        <br /><br />
     
I&apos;m a self-learning software developer. It&apos;s been 4 years since I started my journey in software development and I&apos;m currently learning Python.
<br /><br />

👩‍💻 I&apos;m currently working on my new web app
<br /><br />
🧠 I&apos;m currently learning Python, NextJS and Typescript
<br /><br />
👯‍♀️ I&apos;m looking to collaborate with others
<br /><br />
💬 Ask me about Windows 10, HTML, CSS, Js, Bootstrap, Tailwind Css, Visual Studio Code, Python
        </kbd>
        </div>
    </div>
    
  )
}
