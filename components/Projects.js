/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
// import pwd from '../public/screenshots/pwd.png'
// import tws from '../public/screenshots/tws.png'

export default function Projects() {
  return (
    <div id="proj">
        <section className="text-gray-600 body-font dark:bg-gray-800 dark:text-gray-400 -mt-2">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className=" h-full bg-gray-200"></div>
      </div>
      <br />
      <div className="mb-20 ">
        <p className="sm:w-2/5 dark:text-white text-gray-900 font-medium title-font text-3xl  sm:mb-0"># Projects</p>
       
        <p className="sm:w-3/5 leading-relaxed  text-xl">Here are some of the projects that I&apos;ve made</p>
       
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src='/tws.png'/>
        </div>
        <h2 className="text-xl font-medium title-font dark:text-white text-gray-900 mt-5">Blog- Tech With Spandy</h2>
        <p className="text-base leading-relaxed mt-2">My blog website, which I made using TailwindCss & NextJs</p>
        <a href='https://techwithspandy.tk' target='_blank' rel='noreferrer' className="text-blue-400 inline-flex items-center mt-3">Visit
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
       
          <img alt="content" className="object-cover object-center h-full w-full" src='/pwd.png'/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white mt-5">Passwrdd</h2>
        <p className="text-base leading-relaxed mt-2">A website that generates strong and customisable passwords</p>
        <a href='https://passwrdd.vercel.app' target='_blank' rel='noreferrer' className="text-blue-400 inline-flex items-center mt-3">Visit
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x400/2f2f2f/f2f2f2&text=Weather+App"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white mt-5">Weather App</h2>
        <p className="text-base leading-relaxed mt-2">Weather App</p>
        {/* <a className="text-blue-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x400/2f2f2f/f2f2f2&text=Rock+Paper+Scissors+Game"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white mt-5">Rock Paper and Scissors Game</h2>
        <p className="text-base leading-relaxed mt-2">Rock Paper and Scissors Game I made in python.</p>
        <a className="text-blue-400 inline-flex items-center mt-3" href='https://replit.com/@SpandyBoss/Rock-Paper-Scissors-Game?v=1'>Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> 
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x400/2f2f2f/f2f2f2&text=Tip+Calculator"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white mt-5">Tip Calculator</h2>
        <p className="text-base leading-relaxed mt-2">A Tip Calculator program made in python.</p>
        <a className="text-blue-400 inline-flex items-center mt-3" href='https://replit.com/@SpandyBoss/Tip-Calculator?v=1'>Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> 
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x400/2f2f2f/f2f2f2&text=Treasure+Island"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 dark:text-white mt-5">Treasure Island</h2>
        <p className="text-base leading-relaxed mt-2">Treasure Island adventure game made in python</p>
        <a className="text-blue-400 inline-flex items-center mt-3" href='https://replit.com/@SpandyBoss/Treasure-Island-Game?v=1'>Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> 
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
