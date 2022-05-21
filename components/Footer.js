import React from 'react'

export default function Footer() {
  return (
    
   
    <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <div>
                            <a href="#" className="text-xl font-bold text-blue-500 dark:text-blue-400 hover:text-gray-800 dark:hover:text-gray-300">Spandan&apos;s Portfolio</a>
                        </div>
                        
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Sections</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Home</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AMA</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                            <a href="https://dev.to/spandyboss" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Dev community</a>
                            <a href="https://techwithspandy.tk" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tech With Spandy</a>
                            {/* <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"></a> */}
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Social</h3>
                            <div className='flex'>
                           <a href="https://github.com/spandyboss" target='_blank' rel='noreferrer'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                           </a>
                            &nbsp;
                            <a href="https://in.pinterest.com/spandytheCool/" target='_blank' rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.542 1.581 4.712 3.812 5.587-.052-.475-.1-1.203.022-1.721.108-.468.703-2.982.703-2.982s-.181-.359-.181-.891c0-.834.485-1.457 1.087-1.457.512 0 .759.385.759.845 0 .516-.328 1.285-.497 1.998-.142.598.3 1.084.889 1.084 1.066 0 1.887-1.124 1.887-2.747 0-1.437-1.032-2.441-2.507-2.441-1.707 0-2.709 1.28-2.709 2.604 0 .516.199 1.068.446 1.368.049.06.056.112.041.173l-.165.68c-.027.11-.088.134-.201.081-.75-.349-1.219-1.444-1.219-2.325 0-1.893 1.375-3.63 3.964-3.63 2.082 0 3.7 1.482 3.7 3.465 0 2.068-1.304 3.732-3.114 3.732-.608 0-1.179-.315-1.375-.689l-.374 1.426c-.135.521-.501 1.175-.746 1.573.562.173 1.16.267 1.778.267 3.313 0 6-2.687 6-6 0-3.314-2.687-6-6-6z"/></svg>
                            &nbsp;
                            </a>
                            &nbsp;
                            <a href="https://dev.to/spandyboss" target='_blank' rel='noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' className='mt-' viewBox="0 0 448 512"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/></svg>
                            </a>
                            </div>
                        </div>
                        
                       

                    </div>
                </div>
            </div>

            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

            <div className='text-center'>
                <span className="text-center text-gray-800 dark:text-white">© Spandan&apos;s Portfolio 2022 - All rights reserved</span>
            </div>
            <div className="my-6 text-center">
                            <h3 className="text-gray-700  dark:text-white">No ads, no tracking. Enjoy your day!</h3>
            </div>
        </div>
    </footer>
  )
}
